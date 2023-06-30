import { apiUrl } from '../constants';
import {
  ICreateGamePayload,
  IEndTurnPayload,
  IJoinGamePayload,
  ILoadGamePayload,
  IThrowCartPayload,
  IUser,
  IUserLoginCreds,
  IUserRegisterCreds,
} from '../interfaces';

import { ajax } from 'rxjs/ajax';

class httpApi {
  private static baseApiPostRequest<P>(endpoint: string, payload: P) {
    return ajax.post<IUser>(`${apiUrl}/api/${endpoint}`, payload, {
      'Content-Type': 'application/json',
    });
  }
  static signIn(payload: IUserLoginCreds) {
    return httpApi.baseApiPostRequest('auth/signIn', payload);
  }
  static signUp(payload: IUserRegisterCreds) {
    return httpApi.baseApiPostRequest('auth/signUp', payload);
  }
  static createGame(payload: ICreateGamePayload) {
    return httpApi.baseApiPostRequest('auth/create-game', payload);
  }
  static joinGame(payload: IJoinGamePayload) {
    return httpApi.baseApiPostRequest('auth/join-game', payload);
  }
  static loadGame(payload: ILoadGamePayload) {
    return httpApi.baseApiPostRequest('auth/loaded-game', payload);
  }
  static throwCard(payload: IThrowCartPayload) {
    return httpApi.baseApiPostRequest('auth/card-thrown', payload);
  }
  static endTurn(payload: IEndTurnPayload) {
    return httpApi.baseApiPostRequest('auth/turn-ended', payload);
  }
}

export { httpApi };
