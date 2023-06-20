import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { InfiniteProgress } from "../ui";
import { useAuthSelector } from "../store";
import { IUser } from "../interfaces";

const SignalRContext = createContext<HubConnection>(null!);

const SignalRProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const connection = useRef<HubConnection | null>(null);
  const { user } = useAuthSelector() as { user: IUser };

  const startConnection = useCallback(
    async (connection: HubConnection) => {
      try {
        await connection.start();
        console.log("Connected to the server.");
        await connection.invoke("SetUserId", user.id);
        console.log("SetUserId invoked successfully.");
        setIsConnected(true);
      } catch (error) {
        console.error("Failed to start or invoke SetUserId:", error);
      }
    },
    [user?.id]
  );

  useEffect(() => {
    if (!connection.current) {
      connection.current = new HubConnectionBuilder()
        .withUrl("http://localhost:5157/socket")
        .withAutomaticReconnect()
        .build();
      connection.current.onclose(() => {
        console.log("Connection closed.");
        setIsConnected(false);
      });
    }

    startConnection(connection.current);

    return () => {
      connection.current?.stop().then(() => {
        console.log("Terminated");
      });
    };
  }, [startConnection]);

  return (
    <SignalRContext.Provider value={connection.current!}>
      {isConnected ? children : <InfiniteProgress />}
    </SignalRContext.Provider>
  );
};

const useSignalR = () => {
  return useContext(SignalRContext);
};

export { SignalRProvider, useSignalR };
