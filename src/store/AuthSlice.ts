import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../api";
import { useAppSelector } from ".";

const initialState = () => {
  const userString = localStorage.getItem("user");

  return userString
    ? {
        isAutorized: true,
        user: JSON.parse(userString),
      }
    : {
        isAutorized: false,
        user: null,
      };
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
        localStorage.setItem("user", JSON.stringify(payload));
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
