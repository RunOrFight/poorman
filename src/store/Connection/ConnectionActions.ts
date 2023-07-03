import { HubConnectionState } from '@microsoft/signalr';

export const IS_USER_SETTLED = 'IS_USER_SETTLED';

export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';

export const IsUserSettledAction = () => ({ type: IS_USER_SETTLED });

export const SetConnectionStateAction = (payload: HubConnectionState) => ({
  type: SET_CONNECTION_STATE,
  payload,
});
