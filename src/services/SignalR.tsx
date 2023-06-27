/* eslint-disable no-console */
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { InfiniteProgress } from '../ui';
import { useAuthSelector } from '../store';
import { ExtendedConnection, IUser } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../constants';

const SignalRContext = createContext<ExtendedConnection>(null!);

const SignalRProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const connection = useRef<HubConnection | null>(null);
  const { user } = useAuthSelector() as { user: IUser };
  const navigate = useNavigate();

  const startConnection = useCallback(
    async (connection: HubConnection) => {
      try {
        await connection.start();

        console.log('Connected to the server.');
        await connection.invoke('SetUserId', user.id);
        console.log('SetUserId invoked successfully.');
        setIsConnected(true);
      } catch (error) {
        console.error('Failed to start or invoke SetUserId:', error);
        await connection.stop();
        navigate('/login');
      }
    },
    [user?.id, navigate]
  );

  useEffect(() => {
    if (!connection.current) {
      connection.current = new HubConnectionBuilder()
        .withUrl(`${apiUrl}/socket`)
        .withAutomaticReconnect()
        .build();
      connection.current.onclose(() => {
        console.log('Connection closed.');
        setIsConnected(false);
      });
    }
    if (!isConnected) {
      startConnection(connection.current);
    }

    return () => {
      connection.current?.stop().then(() => {
        console.log('Terminated');
      });
    };
  });

  return (
    <SignalRContext.Provider value={connection.current!}>
      {isConnected && connection ? children : <InfiniteProgress />}
    </SignalRContext.Provider>
  );
};

const useSignalR = () => {
  return useContext(SignalRContext);
};

export { SignalRProvider, useSignalR };
