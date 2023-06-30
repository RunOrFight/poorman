import { IUser, IUserLoginCreds, IUserRegisterCreds } from '../../interfaces';
import { AjaxError } from 'rxjs/internal/ajax/errors';

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_OK = 'SIGN_IN_OK';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_OK = 'SIGN_UP_OK';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

export const SingInStartAction = (userCreds: IUserLoginCreds) => ({
  type: SIGN_IN_START,
  payload: userCreds,
});

export const SingInOkAction = (user: IUser) => ({
  type: SIGN_IN_OK,
  payload: user,
});

export const SingInFailAction = (err: AjaxError) => ({
  type: SIGN_IN_FAIL,
  payload: err,
});

export const SingUpStartAction = (userCreds: IUserRegisterCreds) => ({
  type: SIGN_UP_START,
  payload: userCreds,
});

export const SingUpOkAction = (user: IUser) => ({
  type: SIGN_UP_OK,
  payload: user,
});

export const SingUpFailAction = (err: AjaxError) => ({
  type: SIGN_UP_FAIL,
  payload: err,
});
