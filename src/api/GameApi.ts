import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICreateGameResponse,
  ICreteGamePayload,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse,
} from "../interfaces";

export const GameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/game/`,
  }),
  endpoints: (builder) => ({
    createGame: builder.mutation<ICreateGameResponse, ICreteGamePayload>({
      query: (payload) => ({
        url: "create-game",
        method: "POST",
        body: payload,
      }),
    }),
    joinGame: builder.mutation<IJoinGameResponse, IJoinGamePayload>({
      query: (payload) => ({
        url: "join-game",
        method: "POST",
        body: payload,
      }),
    }),
    loadGame: builder.mutation<ILoadGameResponse, ILoadGamePayload>({
      query: (payload) => ({
        url: "loaded-game",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateGameMutation,
  useJoinGameMutation,
  useLoadGameMutation,
} = GameApi;
