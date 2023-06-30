import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ExtendedConnection } from '../interfaces';
import { HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';
import { apiUrl } from '../constants';
import { useAuthSelector } from '../store';

const connection = new HubConnectionBuilder().withUrl(`${apiUrl}/socket`).build();

const SignalRContext = createContext<ExtendedConnection>(connection);

const useSignalR = () => {
  return useContext(SignalRContext);
};

export const WithConnection = (copmonent: ReactNode) => {
  const [connectionState, setConnectionState] = useState(connection.state);
  const [isUserSettled, setIsUserSettled] = useState(false);
  const user = useAuthSelector().user;

  useEffect(() => {
    if (connectionState === HubConnectionState.Disconnected) {
      connection
        .start()
        .then(() => {
          setConnectionState(connection.state);
          connection.invoke('SetUserId', user.id).then(() => {
            !isUserSettled && setIsUserSettled(true);
          });
        })
        .catch(() => setConnectionState(connection.state));
    }
  });

  switch (connectionState) {
    case HubConnectionState.Disconnected:
      return <div className="text-2xl text-white">The hub connection is disconnected.</div>;
    case HubConnectionState.Disconnecting:
      return <div className="text-2xl text-white">The hub connection is disconnecting.</div>;
    case HubConnectionState.Reconnecting:
      return <div className="text-2xl text-white">The hub connection is reconnecting.</div>;
    case HubConnectionState.Connecting:
      return <div className="text-2xl text-white">The hub connection is connecting.</div>;
    case HubConnectionState.Connected:
      return isUserSettled ? (
        <SignalRContext.Provider value={connection}>{copmonent}</SignalRContext.Provider>
      ) : (
        'The hub connection is connected but user is not settled.'
      );
    default:
      return <div className="text-2xl text-white">No connection.</div>;
  }
};

export { SignalRContext, useSignalR };
