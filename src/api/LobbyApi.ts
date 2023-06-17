import { ICreateLobbyResponse, IPlayer } from "../interfaces";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/game/${endPoint}`;

interface ICreteLobbyPayload {
  userId: IPlayer["id"];
}

const createLobby = async (
  payload: ICreteLobbyPayload
): Promise<void | ICreateLobbyResponse> => {
  const res = await fetch(getBaseUrl("create-game"), {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!res.ok) {
    console.error("Ошибка HTTP:", res.status);
  } else {
    const data = await res.json();
    return data;
  }
};

export { createLobby };
