import {
  ICardAttack,
  ICardIsDead,
  IEndTurnPayload,
  IEndTurnResponse,
  IFindGamePayload,
  IFindGameResponse,
  IGameData,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse,
  IThrowCartPayload,
  IThrowCartResponse,
  TPlayerWin,
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

export const SET_GAME_DATA_START = 'SET_GAME_DATA_START';
export const SET_GAME_DATA_OK = 'SET_GAME_DATA_OK';

export const BATTLE_START = 'BATTLE_START';

export const CARD_ATTACK_START = 'CARD_ATTACK_START';
export const CARD_ATTACK_OK = 'CARD_ATTACK_OK';

export const TURN_START = 'TURN_START';

export const END_TURN_START = 'END_TURN_START';
export const END_TURN_OK = 'END_TURN_OK';
export const END_TURN_FAIL = 'END_TURN_FAIL';

export const CARD_THROW_START = 'CARD_THROW_START';
export const CARD_THROW_OK = 'CARD_THROW_OK';
export const CARD_THROW_FAIL = 'CARD_THROW_FAIL';

export const PLAYER_WIN = 'PLAYER_WIN';

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

export const CreateGameStartAction = (payload: IFindGamePayload) => ({
  type: CREATE_GAME_START,
  payload,
});

export const CreateGameOkAction = (response: IFindGameResponse) => ({
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

export const SetGameDataStartAction = (payload: IGameData) => ({
  type: SET_GAME_DATA_START,
  payload,
});

export const SetGameDataOkAction = (payload: IGameData) => ({
  type: SET_GAME_DATA_OK,
  payload,
});

export const BattleStartAction = (payload: boolean) => ({
  type: BATTLE_START,
  payload,
});

export const CardAttackStartAction = (payload: ICardAttack) => ({
  type: CARD_ATTACK_START,
  payload,
});

export const CardAttackOkAction = (payload: ICardAttack) => ({
  type: CARD_ATTACK_OK,
  payload,
});

export const TurnStartAction = () => ({
  type: TURN_START,
});

export const EndTurnStart = (payload: IEndTurnPayload) => ({
  type: END_TURN_START,
  payload,
});

export const EndTurnOk = (payload: IEndTurnResponse) => ({
  type: END_TURN_OK,
  payload,
});

export const EndTurnFail = (payload: AjaxError) => ({
  type: END_TURN_FAIL,
  payload,
});

export const CardThrowStart = (payload: IThrowCartPayload) => ({
  type: CARD_THROW_START,
  payload,
});

export const CardThrowOk = (payload: IThrowCartResponse) => ({
  type: CARD_THROW_OK,
  payload,
});

export const CardThrowFail = (payload: AjaxError) => ({
  type: CARD_THROW_FAIL,
  payload,
});

export const PlayerWinAction = (payload: TPlayerWin) => ({
  type: PLAYER_WIN,
  payload,
});

export const CARD_IS_DEAD = 'CARD_IS_DEAD';
export const CardIsDeadAction = (payload: ICardIsDead) => ({
  type: CARD_IS_DEAD,
  payload,
});
