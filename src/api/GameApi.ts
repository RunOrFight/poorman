import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICreateGameResponse,
  ICreteGamePayload,
  IEndTurnPayload,
  IEndTurnResponse,
  IJoinGamePayload,
  IJoinGameResponse,
  ILoadGamePayload,
  ILoadGameResponse,
  IThrowCartPayload,
  IThrowCartResponse,
} from "../interfaces";

export const GameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/api/game/" }),
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
    endTurn: builder.mutation<IEndTurnResponse, IEndTurnPayload>({
      query: (payload) => ({
        url: "turn-ended",
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
  useEndTurnMutation,
} = GameApi;
