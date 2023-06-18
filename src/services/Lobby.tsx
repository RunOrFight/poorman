import { useState } from "react";
import {
  ICreateLobbyResponse,
  IJoinLobbyResponse,
  TRequestStatus,
} from "../interfaces";
import { createLobbyApi, joinLobbyApi } from "../api";
import { useAuth } from ".";

const useCreateLobby = () => {
  const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
  const [data, setData] = useState<ICreateLobbyResponse | null>(null);
  const { player } = useAuth();

  const createLobby = async () => {
    if (!player) {
      return;
    }

    setRequestStatus("pending");

    const data = await createLobbyApi({ userId: player.id });
    data ? setRequestStatus("done") : setRequestStatus("error");

    setData(data);
  };

  return { data, requestStatus, createLobby };
};

const useJoinLobby = () => {
  const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
  const [data, setData] = useState<IJoinLobbyResponse | null>(null);
  const { player } = useAuth();

  const joinLobby = async (link: ICreateLobbyResponse["link"]) => {
    if (!player) {
      return;
    }

    setRequestStatus("pending");

    const data = await joinLobbyApi({ userId: player.id, link });
    data ? setRequestStatus("done") : setRequestStatus("error");

    setData(data);
  };

  return { data, requestStatus, joinLobby };
};

export { useCreateLobby, useJoinLobby };
