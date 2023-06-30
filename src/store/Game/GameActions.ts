import {
  ICardAttack,
  ICreateGamePayload,
  ICreateGameResponse,
  IGameData,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse,
} from '../../interfaces';
import { AjaxError } from 'rxjs/internal/ajax/errors';

export const JOIN_GAME_START = 'JOIN_GAME_START';
export const JOIN_GAME_OK = 'JOIN_GAME_OK';
export const JOIN_GAME_FAIL = 'JOIN_GAME_FAIL';

export const CREATE_GAME_START = 'CREATE_GAME_START';
export const CREATE_GAME_OK = 'CREATE_GAME_OK';
export const CREATE_GAME_FAIL = 'CREATE_GAME_FAIL';

export const LOAD_GAME_START = 'LOAD_GAME_START';
export const LOAD_GAME_OK = 'LOAD_GAME_OK';
export const LOAD_GAME_FAIL = 'LOAD_GAME_FAIL';

export const SET_GAME_DATA = 'SET_GAME_DATA';

export const BATTLE_START = 'BATTLE_START';

export const CARD_ATTACK = 'CARD_ATTACK';

export const TURN_START = 'TURN_START';

export const LoadGameStartAction = (payload: ILoadGamePayload) => ({
  type: LOAD_GAME_START,
  payload,
});

export const LoadGameOkAction = (response: ILoadGameResponse) => ({
  type: LOAD_GAME_OK,
  payload: response,
});

export const LoadGameFailAction = (err: AjaxError) => ({
  type: LOAD_GAME_FAIL,
  payload: err,
});

export const CreateGameStartAction = (payload: ICreateGamePayload) => ({
  type: CREATE_GAME_START,
  payload,
});

export const CreateGameOkAction = (response: ICreateGameResponse) => ({
  type: CREATE_GAME_OK,
  payload: response,
});

export const CreateGameFailAction = (err: AjaxError) => ({
  type: CREATE_GAME_FAIL,
  payload: err,
});

export const JoinGameStartAction = (payload: IJoinGamePayload) => ({
  type: JOIN_GAME_START,
  payload,
});

export const JoinGameOkAction = (response: IJoinGameResponse) => ({
  type: JOIN_GAME_OK,
  payload: response,
});

export const JoinGameFailAction = (err: AjaxError) => ({
  type: JOIN_GAME_FAIL,
  payload: err,
});

export const SetGameDataAction = (payload: IGameData) => ({
  type: SET_GAME_DATA,
  payload,
});

export const BattleStartAction = () => ({
  type: BATTLE_START,
});

export const CardAttackAction = (payload: { cardId: string; isEnemy: boolean }) => ({
  type: CARD_ATTACK,
  payload,
});

export const TurnStartAction = () => ({
  type: TURN_START,
});
