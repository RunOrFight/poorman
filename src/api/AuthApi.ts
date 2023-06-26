import { IUser, IUserLoginCreds, IUserRegisterCreds } from '../interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../constants';

export const AuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/api/auth/`,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<IUser, IUserLoginCreds>({
      query: (userCreds) => ({
        method: 'POST',
        url: '/signIn',
        body: userCreds,
      }),
    }),
    signUp: builder.mutation<IUser, IUserRegisterCreds>({
      query: (userCreds) => ({
        method: 'POST',
        url: '/signUp',
        body: userCreds,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = AuthApi;
