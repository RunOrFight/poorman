import {
  ActionWithPayload,
  AppEpic,
  CARD_ATTACK_START,
  CARD_THROW_START,
  CREATE_GAME_START,
  CardAttackOkAction,
  CardThrowFail,
  CardThrowOk,
  CreateGameFailAction,
  CreateGameOkAction,
  END_TURN_START,
  EndTurnFail,
  EndTurnOk,
  JOIN_GAME_START,
  JoinGameFailAction,
  JoinGameOkAction,
  LOAD_GAME_START,
  LoadGameFailAction,
  LoadGameOkAction,
  PLAYER_WIN,
  SET_GAME_DATA_START,
  SetGameDataOkAction,
  pushStart,
} from '../index.ts';
import { merge, concatMap, from, of, EMPTY, concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { animePromise, cardAttackAnimation, playerWinAnimation, toCloseTheVeil } from '../../utils';
import {
  catchError,
  distinctUntilChanged,
  exhaustMap,
  map,
  filter,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { ICardAttack, IGameData } from '../../interfaces/Game.ts';
import { isGameOnlyMode } from '../../constants/Env.ts';

const GameEpic: AppEpic = (action$, state$, { httpApi }) =>
  merge(
    action$.pipe(
      filter(
        (action) =>
          action.type === CARD_ATTACK_START ||
          action.type === SET_GAME_DATA_START ||
          action.type === PLAYER_WIN
      ),
      distinctUntilChanged((prev, next) =>
        isGameOnlyMode ? false : JSON.stringify(prev.payload) === JSON.stringify(next.payload)
      ),

      concatMap(({ payload, type }: ActionWithPayload<ICardAttack | IGameData>) => {
        if (type === CARD_ATTACK_START) {
          const { attackingCard, attackingPlayerId } = payload as ICardAttack;
          const isEnemy = state$.value.game.playerId !== attackingPlayerId;
          const cardId = attackingCard.id;
          return from(animePromise(cardAttackAnimation({ isEnemy, cardId }))).pipe(
            map(() => CardAttackOkAction(payload as ICardAttack))
          );
        } else if (type === PLAYER_WIN) {
          return concat(
            from(animePromise(toCloseTheVeil)).pipe(switchMap(() => EMPTY)),
            from(animePromise(playerWinAnimation)).pipe(switchMap(() => EMPTY))
          );
        } else {
          return of(SetGameDataOkAction(payload as IGameData));
        }
      })
    ),
    action$.pipe(
      ofType(CREATE_GAME_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.findGame(payload).pipe(
            mergeMap((res) =>
              from([CreateGameOkAction(res.response), pushStart(`/game/${res.response.gameId}`)])
            ),
            catchError((err) => of(CreateGameFailAction(err)))
          )
        )
      )
    ),
    action$.pipe(
      ofType(JOIN_GAME_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.joinGame(payload).pipe(
            map((res) => JoinGameOkAction(res.response)),
            catchError((err) => of(JoinGameFailAction(err)))
          )
        )
      )
    ),
    action$.pipe(
      ofType(LOAD_GAME_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.loadGame(payload).pipe(
            map((res) => LoadGameOkAction(res.response)),
            catchError((err) => of(LoadGameFailAction(err)))
          )
        )
      )
    ),
    action$.pipe(
      ofType(END_TURN_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.endTurn(payload).pipe(
            map((res) => EndTurnOk(res.response)),
            catchError((err) => of(EndTurnFail(err)))
          )
        )
      )
    ),
    action$.pipe(
      ofType(CARD_THROW_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.throwCard(payload).pipe(
            map((res) => CardThrowOk(res.response)),
            catchError((err) => of(CardThrowFail(err)))
          )
        )
      )
    )
  );

export { GameEpic };
