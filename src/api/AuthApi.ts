import { IPlayer, IPlayerLoginCreds } from "../interfaces";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/auth/${endPoint}`;

const signIn = async (
  playerCreds: IPlayerLoginCreds
): Promise<void | IPlayer> => {
  const res = await fetch(getBaseUrl("signIn"), {
    method: "POST",
    body: JSON.stringify(playerCreds),
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

export { signIn };
