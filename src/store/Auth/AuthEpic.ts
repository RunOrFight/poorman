import { ofType } from 'redux-observable';
import { ActionWithPayload, AppEpic, SingUpFailAction, SingUpOkAction } from '..';
import {
  SIGN_IN_OK,
  SIGN_IN_START,
  SingInOkAction,
  SIGN_UP_START,
  SingInFailAction,
} from './AuthActions';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { IUserLoginCreds, IUserRegisterCreds } from '../../interfaces';
import { AjaxError } from 'rxjs/internal/ajax/errors';
import { push } from 'redux-first-history';

const AuthEpic: AppEpic = (action$, state$, { httpApi }) => {
  return merge(
    action$.pipe(
      ofType(SIGN_IN_START),
      exhaustMap(({ payload }: ActionWithPayload<IUserLoginCreds>) =>
        httpApi.signIn(payload).pipe(
          tap((res) => localStorage.setItem('user', JSON.stringify(res.response))),
          map((res) => SingInOkAction(res.response)),
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
      ofType(SIGN_IN_OK),
      map(() => push('/game'))
    )
  );
};

export { AuthEpic };
