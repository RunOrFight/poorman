import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICreateGameResponse,
  ICreteGamePayload,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse, IThrowCartPayload, IThrowCartResponse,
} from "../interfaces";

export const GameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5157/game/" }),
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
    throwCard: builder.mutation<IThrowCartResponse, IThrowCartPayload>({
      query: (payload) => ({
        url: "card-thrown",
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
  useThrowCardMutation,
} = GameApi;
