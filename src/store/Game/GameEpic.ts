import {
  ActionWithPayload,
  AppEpic,
  CARD_ATTACK_START,
  CARD_IS_DEAD,
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
import {
  animePromise,
  cardAttackAnimation,
  cardIsDeadAnimation,
  fieldUnderAttackAnimation,
  playerWinAnimation,
  toCloseTheVeil,
} from '../../utils';
import {
  catchError,
  distinctUntilChanged,
  exhaustMap,
  map,
  filter,
  mergeMap,
} from 'rxjs/operators';
import { CardIn, CardType, ICardAttack, ICardIsDead, IGameData } from '../../interfaces';
import { isGameOnlyMode } from '../../constants/Env.ts';
import { sound_archer, sound_energy, sound_gun, sound_sword } from '../../assets';

const GameEpic: AppEpic = (action$, state$, { httpApi }) =>
  merge(
    action$.pipe(
      filter(
        (action) =>
          action.type === CARD_ATTACK_START ||
          action.type === SET_GAME_DATA_START ||
          action.type === PLAYER_WIN ||
          action.type === CARD_IS_DEAD
      ),
      distinctUntilChanged((prev, next) =>
        isGameOnlyMode ? false : JSON.stringify(prev.payload) === JSON.stringify(next.payload)
      ),

      concatMap(({ payload, type }: ActionWithPayload<ICardAttack | IGameData | ICardIsDead>) => {
        if (type === CARD_ATTACK_START) {
          const { attackingCard, attackingPlayerId, fieldsUnderAttack } = payload as ICardAttack;
          const isEnemy = state$.value.game.playerId !== attackingPlayerId;
          const cardId = attackingCard.id;
          const cardType = attackingCard.type;
          const audio =
            attackingCard.type === CardType.Straight
              ? new Audio(sound_sword)
              : attackingCard.type === CardType.Left
              ? new Audio(sound_archer)
              : attackingCard.type === CardType.Right
              ? new Audio(sound_gun)
              : attackingCard.type === CardType.All
              ? new Audio(sound_energy)
              : null;
          return merge(
            from((audio as HTMLAudioElement).play()).pipe(mergeMap(() => EMPTY)),
            from(
              animePromise(
                fieldUnderAttackAnimation({
                  isEnemy,
                  fieldIds: fieldsUnderAttack.map((fieldUnderAttack) => CardIn[fieldUnderAttack]),
                })
              )
            ).pipe(mergeMap(() => EMPTY)),
            from(animePromise(cardAttackAnimation({ isEnemy, cardId, cardType }))).pipe(
              map(() => CardAttackOkAction(payload as ICardAttack))
            )
          );
        } else if (type === PLAYER_WIN) {
          return concat(
            from(animePromise(toCloseTheVeil)).pipe(mergeMap(() => EMPTY)),
            from(animePromise(playerWinAnimation)).pipe(mergeMap(() => EMPTY))
          );
        } else if (type === CARD_IS_DEAD) {
          return from(
            animePromise(
              cardIsDeadAnimation({
                fieldId: CardIn[(payload as ICardIsDead).field],
                isEnemy: state$.value.game.playerId !== (payload as ICardIsDead).playerId,
              })
            )
          ).pipe(mergeMap(() => EMPTY));
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
  ).pipe(
    catchError((e) => {
      // eslint-disable-next-line no-console
      console.log('ERROR FROM EPIC', e);

      return EMPTY;
    })
  );

export { GameEpic };
