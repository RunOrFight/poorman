import { IUser, IUserLoginCreds } from '../../interfaces';

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_OK = 'SIGN_IN_OK';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export const singInStartAction = (userCrends: IUserLoginCreds) => ({
  type: SIGN_IN_START,
  payload: userCrends,
});

export const singInOkAction = (user: IUser) => ({
  type: SIGN_IN_OK,
  payload: user,
});

export const singInFailAction = (err) => ({
  type: SIGN_IN_FAIL,
  payload: err,
});
