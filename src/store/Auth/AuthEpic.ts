import { ofType } from 'redux-observable';
import { ActionWithPayload, AppEpic } from '..';
import { SIGN_IN_OK, SIGN_IN_START, SingInOkAction, SIGN_UP_START } from './AuthActions';
import { catchError, map, exhaustMap } from 'rxjs/operators';
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
          map((res) => SingInOkAction(res.response)),
          catchError((err: AjaxError) => {
            const user = { id: 15, name: 'Sasha', email: '@hello' };
            localStorage.setItem('user', JSON.stringify(user));
            return of(/*singInFailAction(err)*/ SingInOkAction(user));
          })
        )
      )
    ),
    action$.pipe(
      ofType(SIGN_UP_START),
      exhaustMap(({ payload }: ActionWithPayload<IUserRegisterCreds>) =>
        httpApi.signUp(payload).pipe(
          map((res) => SingInOkAction(res.response)),
          catchError((err: AjaxError) => {
            const user = { id: 15, name: 'Sasha', email: '@hello' };
            localStorage.setItem('user', JSON.stringify(user));
            return of(/*singInFailAction(err)*/ SingInOkAction(user));
          })
        )
      )
    ),
    action$.pipe(
      ofType(SIGN_IN_OK),
      map(() => {
        const ph = push('/game');
        return ph;
      })
    )
  );
};

export { AuthEpic };
