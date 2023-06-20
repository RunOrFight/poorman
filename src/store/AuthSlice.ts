import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../api";
import { IUser } from "../interfaces";
import { useAppSelector } from ".";

const initialState = {
  isAutorized: false,
  user: null as IUser | null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      AuthApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.isAutorized = true;
        state.user = payload;
        return state;
      }
    );
  },
});

export const { reducer: AuthReducer, actions } = AuthSlice;

export const useAuthSelector = () => {
  return useAppSelector((state) => {
    return state.auth;
  });
};
