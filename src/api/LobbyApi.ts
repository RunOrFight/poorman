import {
  ICreateLobbyResponse,
  IJoinLobbyResponse,
  IPlayer,
} from "../interfaces";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/game/${endPoint}`;

interface ICreteLobbyPayload {
  userId: IPlayer["id"];
}

interface IJoinLobbyPayload {
  userId: IPlayer["id"];
  link: ICreateLobbyResponse["link"];
}

const createLobbyApi = async (
  payload: ICreteLobbyPayload
): Promise<null | ICreateLobbyResponse> => {
  const res = await fetch(getBaseUrl("create-game"), {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!res.ok) {
    return null;
  } else {
    const data = await res.json();
    return data;
  }
};

const joinLobbyApi = async (
  payload: IJoinLobbyPayload
): Promise<null | IJoinLobbyResponse> => {
  const res = await fetch(getBaseUrl("join-game"), {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!res.ok) {
    return null;
  } else {
    const data = await res.json();
    return data;
  }
};

export { createLobbyApi, joinLobbyApi };
