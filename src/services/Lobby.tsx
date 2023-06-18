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
  const { user } = useAuth();

  const createLobby = async () => {
    if (!user) {
      return;
    }

    setRequestStatus("pending");

    const data = await createLobbyApi({ userId: user.id });
    data ? setRequestStatus("done") : setRequestStatus("error");

    setData(data);
  };

  return { data, requestStatus, createLobby };
};

const useJoinLobby = () => {
  const [requestStatus, setRequestStatus] = useState<TRequestStatus>("init");
  const [data, setData] = useState<IJoinLobbyResponse | null>(null);
  const { user } = useAuth();

  const joinLobby = async (link: ICreateLobbyResponse["link"]) => {
    if (!user) {
      return;
    }

    setRequestStatus("pending");

    const data = await joinLobbyApi({ userId: user.id, link });
    data ? setRequestStatus("done") : setRequestStatus("error");

    setData(data);
  };

  return { data, requestStatus, joinLobby };
};

export { useCreateLobby, useJoinLobby };
