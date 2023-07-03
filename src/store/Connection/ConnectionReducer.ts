import { Reducer } from 'redux';
import { ConnectionState, IS_USER_SETTLED, SET_CONNECTION_STATE } from '.';

const ConnectionReducer: Reducer<typeof ConnectionState> = (state = ConnectionState, action) => {
  switch (action.type) {
    case IS_USER_SETTLED:
      return {
        ...state,
        isUserSettled: true,
      };

    case SET_CONNECTION_STATE:
      return state.connectionState === action.payload
        ? state
        : { ...state, connectionState: action.payload };

    default:
      return state;
  }
};

export { ConnectionReducer };
