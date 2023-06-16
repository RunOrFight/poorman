import { IPlayer, IPlayerLoginCreds } from "../interfaces";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/auth/${endPoint}`;

const signIn = async (playerCreds: IPlayerLoginCreds): Promise<IPlayer> => {
  const res = await fetch(getBaseUrl("signIn"), {
    method: "POST",
    body: JSON.stringify(playerCreds),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  })

  const data = await res.json()
  return data;
};


export {signIn}