import { HubConnectionState } from '@microsoft/signalr';

export const ConnectionState = {
  isUserSettled: false,
  connectionState: HubConnectionState.Disconnected as HubConnectionState,
};
