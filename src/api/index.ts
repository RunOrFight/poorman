import { apiUrl } from '../constants';
import { IUser, IUserLoginCreds, IUserRegisterCreds } from '../interfaces';

export * from './GameApi';

import { ajax } from 'rxjs/ajax';

class httpApi {
  static signIn(userCreds: IUserLoginCreds) {
    return ajax.post<IUser>(`${apiUrl}/api/auth/signIn`, userCreds, {
      'Content-Type': 'application/json',
    });
  }

  static signUp(userCreds: IUserRegisterCreds) {
    return ajax.post<IUser>(`${apiUrl}/api/auth/signUp`, userCreds, {
      'Content-Type': 'application/json',
    });
  }
}

export { httpApi };
