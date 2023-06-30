import { Reducer } from 'redux';
import { SIGN_IN_FAIL, SIGN_IN_OK, SIGN_IN_START } from '.';
import { AuthState } from './AuthState';

export const AuthReducer: Reducer<typeof AuthState> = (state = AuthState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return state;
    case SIGN_IN_OK:
      return {
        isAuthorized: true,
        user: action.payload,
      };
    case SIGN_IN_FAIL:
      return {
        isAuthorized: false,
        user: null,
      };
    default:
      return state;
  }
};
