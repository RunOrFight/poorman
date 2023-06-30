import { Reducer } from 'redux';
import { GameState } from './GameState.ts';
import { CREATE_GAME_OK, JOIN_GAME_OK, LOAD_GAME_OK, SET_GAME_DATA_OK } from './GameActions.ts';

export const GameReducer: Reducer<typeof GameState> = (state = GameState, action) => {
  switch (action.type) {
    case CREATE_GAME_OK:
      return {
        ...state,
        link: action.payload.link,
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
    default:
      return state;
  }
};
