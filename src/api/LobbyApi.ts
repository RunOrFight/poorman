import {ICreateLobbyResponse, IJoinLobbyResponse, IUser} from "../interfaces";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/game/${endPoint}`;

interface ICreteLobbyPayload {
  userId: IUser["id"];
}

interface IJoinLobbyPayload {
  userId: IUser["id"];
  link: ICreateLobbyResponse["link"];
}

interface ILoadGamePayload {
  playerId: IPlayer["id"];
  gameId: IGame["id"];
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

const loadGameApi = async (
    payload: ILoadGamePayload
): Promise<null | {success: boolean}> => {
  const res = await fetch(getBaseUrl("loaded-game"), {
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
    return await res.json();
  }
};

export { createLobbyApi, joinLobbyApi, loadGameApi };
