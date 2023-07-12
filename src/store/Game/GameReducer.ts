import { Reducer } from 'redux';
import { GameState } from './GameState.ts';
import {
  CREATE_GAME_OK,
  END_TURN_OK,
  JOIN_GAME_OK,
  LOAD_GAME_OK,
  PLAYER_WIN,
  SET_GAME_DATA_OK,
} from './GameActions.ts';

export const GameReducer: Reducer<typeof GameState> = (state = GameState, action) => {
  switch (action.type) {
    case CREATE_GAME_OK:
      return {
        ...state,
        gameId: action.payload.gameId,
        playerId: action.payload.playerId,
      };
    case JOIN_GAME_OK:
      return {
        ...state,
        gameId: action.payload.gameId,
        playerId: action.payload.playerId,
      };
    case LOAD_GAME_OK:
      return {
        ...state,
        isGameLoaded: action.payload.success,
      };
    case SET_GAME_DATA_OK:
      return {
        ...state,
        ...action.payload,
      };
    case PLAYER_WIN:
      return {
        ...state,
        playerWin: action.payload === state.playerId ? state.playerData.name : state.enemyData.name,
      };
    case END_TURN_OK:
      return {
        ...state,
        isTurnEnd: action.payload.success,
      };

    default:
      return state;
  }
};
