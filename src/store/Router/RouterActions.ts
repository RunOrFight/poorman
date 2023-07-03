import { push } from 'redux-first-history';

export const LOCATION_CHANGE_START = 'LOCATION_CHANGE_START';

export const pushStart = (...args: Parameters<typeof push>) => {
  const [to] = args;
  const action = push(to);
  return { ...action, type: LOCATION_CHANGE_START };
};
