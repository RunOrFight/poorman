import { ofType } from 'redux-observable';
import { ActionWithPayload, AppEpic } from '..';
import { SIGN_IN_START, singInFailAction, singInOkAction } from './AuthActions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUserLoginCreds } from '../../interfaces';

const AuthEpic: AppEpic = (action$, state$, { httpApi }) => {
  return action$.pipe(
    ofType(SIGN_IN_START),
    switchMap(({ payload }: ActionWithPayload<IUserLoginCreds>) =>
      httpApi.signIn(payload).pipe(
        map((res) => singInOkAction(res.response)),
        catchError((err) => of(singInFailAction(err)))
      )
    )
  );
};

export { AuthEpic };
