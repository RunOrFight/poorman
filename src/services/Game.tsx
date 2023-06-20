import {createContext, useContext, useState} from "react";
import {
  ICreateLobbyResponse,
  IJoinLobbyResponse,
  TRequestStatus,
} from "../interfaces";
import { createLobbyApi, joinLobbyApi, loadGameApi } from "../api";
import { useAuth } from ".";
import {useLocalStorage} from "./LocalStorage";

interface IGameContext {
  playerId: number | null;
  createLobby: (userId: number) => any;
}

const GameContext = createContext<IGameContext>(null!);

function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameId, setGameId] = useLocalStorage<number | null>(
      "gameId",
      null
  );
  const [playerId, setPlayerId] = useLocalStorage<number | null>(
      "playerId",
      null
  );

  const createLobby = async (userId: number) => {

    const data = await createLobbyApi({ userId });
    if (!data) {
      return;
    }

    setPlayerId(data.playerId);
    setGameId(data.gameId);

    return data;
  };

  const joinLobby = async (userId: number, link: string) => {

    const data = await joinLobbyApi({ userId, link });
    if (!data) {
      return;
    }

    console.log(data);

    setPlayerId(data.playerId);
    setGameId(data.gameId);

    return data;
  };

  const loadGame = async (playerId: number, gameId: number) => {

    const data = await joinLobbyApi({ playerId, gameId });
    if (!data) {
      return;
    }

    return data;
  };

  const value = { playerId, gameId, createLobby, joinLobby, loadGame };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

const useGame = () => {
  return useContext(GameContext);
};

// const useCreateLobby = () => {
//   const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
//   const [data, setData] = useState<ICreateLobbyResponse | null>(null);
//   const { user } = useAuth();
//
//   const createLobby = async () => {
//     if (!user) {
//       return;
//     }
//
//     setRequestStatus("pending");
//
//     const data = await createLobbyApi({ userId: user.id });
//     data ? setRequestStatus("done") : setRequestStatus("error");
//
//     setData(data);
//   };
//
//   return { data, requestStatus, createLobby };
// };

// const useJoinLobby = () => {
//   const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
//   const [data, setData] = useState<IJoinLobbyResponse | null>(null);
//   const { user } = useAuth();
//
//   const joinLobby = async (link: ICreateLobbyResponse["link"]) => {
//     if (!user) {
//       return;
//     }
//
//     setRequestStatus("pending");
//
//     const data = await joinLobbyApi({ userId: user.id, link });
//     data ? setRequestStatus("done") : setRequestStatus("error");
//
//     setData(data);
//   };
//
//   return { data, requestStatus, joinLobby };
// };

// const useLoadGame = () => {
//   const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
//   const [data, setData] = useState<{success: true} | null>(null);
//   const { user } = useAuth();
//
//   const joinLobby = async (link: ICreateLobbyResponse["link"]) => {
//     if (!user) {
//       return;
//     }
//
//     setRequestStatus("pending");
//
//     const data = await joinLobbyApi({ userId: user.id, link });
//     data ? setRequestStatus("done") : setRequestStatus("error");
//
//     setData(data);
//   };
//
//   return { data, requestStatus, joinLobby };
// };

export { useGame, GameProvider };
