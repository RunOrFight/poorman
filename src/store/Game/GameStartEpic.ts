import { combineEpics, ofType } from 'redux-observable';
import { exhaustMap, from, mergeMap, catchError, of, map, EMPTY } from 'rxjs';
import {
  CREATE_GAME_START,
  CreateGameOkAction,
  CreateGameFailAction,
  LOAD_GAME_START,
  LoadGameOkAction,
  LoadGameFailAction,
  CARD_THROW_START,
  CardThrowOk,
  CardThrowFail,
  JOIN_GAME_START,
  JoinGameOkAction,
  JoinGameFailAction,
  END_TURN_START,
  EndTurnOk,
  EndTurnFail,
} from '.';
import { AppEpic, pushStart } from '..';

const createGameEpics: AppEpic = (action$, _state$, { httpApi }) =>
  action$
    .pipe(
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
    )
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'createGameEpics');

        return EMPTY;
      })
    );
const loadGameEpics: AppEpic = (action$, _state$, { httpApi }) =>
  action$
    .pipe(
      ofType(LOAD_GAME_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.loadGame(payload).pipe(
            map((res) => LoadGameOkAction(res.response)),
            catchError((err) => of(LoadGameFailAction(err)))
          )
        )
      )
    )
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'loadGameEpics');

        return EMPTY;
      })
    );

const cardThrownEpic: AppEpic = (action$, _state$, { httpApi }) =>
  action$
    .pipe(
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
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'cardThrownEpic');

        return EMPTY;
      })
    );

const joinGameEpic: AppEpic = (action$, _state$, { httpApi }) =>
  action$
    .pipe(
      ofType(JOIN_GAME_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.joinGame(payload).pipe(
            map((res) => JoinGameOkAction(res.response)),
            catchError((err) => of(JoinGameFailAction(err)))
          )
        )
      )
    )
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'joinGameEpic');

        return EMPTY;
      })
    );

const endTurnEpic: AppEpic = (action$, _state$, { httpApi }) =>
  action$
    .pipe(
      ofType(END_TURN_START),
      exhaustMap(({ payload }) =>
        from(
          httpApi.endTurn(payload).pipe(
            map((res) => EndTurnOk(res.response)),
            catchError((err) => of(EndTurnFail(err)))
          )
        )
      )
    )
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'endTurnEpic');

        return EMPTY;
      })
    );

const gameStartEpic: AppEpic = combineEpics(
  cardThrownEpic,
  createGameEpics,
  endTurnEpic,
  joinGameEpic,
  loadGameEpics
);

export { gameStartEpic };
