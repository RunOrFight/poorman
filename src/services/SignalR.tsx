import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuth } from ".";
import { InfiniteProgress } from "../ui";

const SignalRContext = createContext<HubConnection>(null!);

const SignalRProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const connection = useRef<HubConnection | null>(null);

  useEffect(() => {
    if (!connection.current) {
      connection.current = new HubConnectionBuilder()
        .withUrl("http://localhost:5157/socket")
        .withAutomaticReconnect()
        .build();
      connection.current
        .start()
        .then(() => {
          console.log("Connected to the server.");
          connection
            .current!.invoke("SetUserId", user?.id)
            .then(() => {
              console.log("SetUserId invoked successfully.");
              setIsConnected(true);
            })
            .catch((error) => {
              console.error("Failed to invoke SetUserId:", error);
            });
        })
        .catch((error) => {
          console.error("Failed to connect to the server: ", error);
        });
    }

    () => {
      connection.current?.stop().then(() => {
        console.log("Terminated");
      });
    };
  }, []);

  const { user } = useAuth();

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
