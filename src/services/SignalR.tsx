import { createContext, useContext } from 'react';
import { ExtendedConnection } from '../interfaces';

const SignalRContext = createContext<ExtendedConnection>(null!);

const useSignalR = () => {
  return useContext(SignalRContext);
};

export { SignalRContext, useSignalR };
