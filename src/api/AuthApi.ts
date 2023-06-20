import { IUser, IUserLoginCreds } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBaseUrl = (endPoint: string) =>
  `http://localhost:5157/auth/${endPoint}`;

const signIn = async (userCreds: IUserLoginCreds): Promise<void | IUser> => {
  const res = await fetch(getBaseUrl("signIn"), {
    method: "POST",
    body: JSON.stringify(userCreds),
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

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5157/auth/" }),
  endpoints: (builder) => ({
    signIn: builder.mutation<IUser, IUserLoginCreds>({
      query: (userCreds) => ({
        method: "POST",
        url: "/signIn",
        body: userCreds,
      }),
    }),
  }),
});

export const { useSignInMutation, internalActions } = AuthApi;

export { signIn };
