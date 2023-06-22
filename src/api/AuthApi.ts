import {IUser, IUserLoginCreds, IUserRegisterCreds} from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    signUp: builder.mutation<IUser, IUserRegisterCreds>({
      query: (userCreds) => ({
        method: "POST",
        url: "/signUp",
        body: userCreds,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = AuthApi;

