import { Reducer } from 'redux';
import { SIGN_IN_FAIL, SIGN_IN_OK, SIGN_UP_FAIL } from '.';
import { AuthState } from './AuthState';

export const AuthReducer: Reducer<typeof AuthState> = (state = AuthState, action) => {
  switch (action.type) {
    case SIGN_IN_OK:
      return {
        ...state,
        isAuthorized: true,
        user: action.payload,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        isError: true,
        isAuthorized: false,
        user: null,
      };

    case SIGN_UP_FAIL:
      return {
        ...state,
        isError: true,
        isAuthorized: false,
        user: null,
      };
    default:
      return state;
  }
};
