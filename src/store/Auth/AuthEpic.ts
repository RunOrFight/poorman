import { ofType } from 'redux-observable';
import {
  ActionWithPayload,
  AppEpic,
  LOCATION_CHANGE_START,
  SingUpFailAction,
  SingUpOkAction,
  pushStart,
} from '..';
import { SIGN_IN_START, SingInOkAction, SIGN_UP_START, SingInFailAction } from './AuthActions';
import { catchError, map, exhaustMap, tap, delay, concatMap } from 'rxjs/operators';
import { EMPTY, from, merge, of } from 'rxjs';
import { IUserLoginCreds, IUserRegisterCreds } from '../../interfaces';
import { AjaxError } from 'rxjs/internal/ajax/errors';
import { LOCATION_CHANGE, CALL_HISTORY_METHOD } from 'redux-first-history';
import { animePromise, tearDownTheVeil, toCloseTheVeil } from '../../utils';
import anime from 'animejs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AuthEpic: AppEpic = (action$, state$, { httpApi }) => {
  return merge(
    action$.pipe(
      ofType(SIGN_IN_START),
      exhaustMap(({ payload }: ActionWithPayload<IUserLoginCreds>) =>
        httpApi.signIn(payload).pipe(
          tap((res) => localStorage.setItem('user', JSON.stringify(res.response))),
          concatMap((res) => from([pushStart('/game'), SingInOkAction(res.response)])),
          catchError((err: AjaxError) => of(SingInFailAction(err)))
        )
      )
    ),
    action$.pipe(
      ofType(SIGN_UP_START),
      exhaustMap(({ payload }: ActionWithPayload<IUserRegisterCreds>) =>
        httpApi.signUp(payload).pipe(
          map((res) => SingUpOkAction(res.response)),
          catchError((err: AjaxError) => {
            return of(SingUpFailAction(err));
          })
        )
      )
    ),

    action$.pipe(
      ofType(LOCATION_CHANGE_START),

      exhaustMap((action) => {
        return from(animePromise(toCloseTheVeil)).pipe(
          map(() => ({ ...action, type: CALL_HISTORY_METHOD }))
        );
      })
    ),

    action$.pipe(
      ofType(LOCATION_CHANGE),
      delay(500),
      tap(() => anime(tearDownTheVeil)),
      map(() => ({ type: EMPTY }))
    )
  );
};

export { AuthEpic };
