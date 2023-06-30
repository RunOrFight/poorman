import { apiUrl } from '../constants';
import {
  ICreateGamePayload,
  ICreateGameResponse,
  IEndTurnPayload,
  IEndTurnResponse,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse,
  IThrowCartPayload,
  IThrowCartResponse,
  IUser,
  IUserLoginCreds,
  IUserRegisterCreds,
} from '../interfaces';

import { ajax } from 'rxjs/ajax';

class httpApi {
  private static baseApiPostRequest<R, P = object>(endpoint: string, payload: P) {
    return ajax.post<R>(`${apiUrl}/api/${endpoint}`, payload, {
      'Content-Type': 'application/json',
    });
  }
  static signIn(payload: IUserLoginCreds) {
    return httpApi.baseApiPostRequest<IUser>('auth/signIn', payload);
  }
  static signUp(payload: IUserRegisterCreds) {
    return httpApi.baseApiPostRequest<IUser>('auth/signUp', payload);
  }
  static createGame(payload: ICreateGamePayload) {
    return httpApi.baseApiPostRequest<ICreateGameResponse>('game/create-game', payload);
  }
  static joinGame(payload: IJoinGamePayload) {
    return httpApi.baseApiPostRequest<IJoinGameResponse>('game/join-game', payload);
  }
  static loadGame(payload: ILoadGamePayload) {
    return httpApi.baseApiPostRequest<ILoadGameResponse>('game/loaded-game', payload);
  }
  static throwCard(payload: IThrowCartPayload) {
    return httpApi.baseApiPostRequest<IThrowCartResponse>('game/card-thrown', payload);
  }
  static endTurn(payload: IEndTurnPayload) {
    return httpApi.baseApiPostRequest<IEndTurnResponse>('game/turn-ended', payload);
  }
}

export { httpApi };
