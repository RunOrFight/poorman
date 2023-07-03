import { Reducer } from 'redux';
import { ConnectionState, IS_USER_SETTLED } from '.';

const ConnectionReducer: Reducer<typeof ConnectionState> = (state = ConnectionState, action) => {
  switch (action.type) {
    case IS_USER_SETTLED:
      return {
        ...state,
        isUserSettled: true,
      };

    default:
      return state;
  }
};

export { ConnectionReducer };
