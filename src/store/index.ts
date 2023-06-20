import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { GameReducer } from "./GameSlice";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AuthApi, GameApi } from "../api";
import { AuthReducer } from "./AuthSlice.ts";

const rootReducer = combineReducers({
  game: GameReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [GameApi.reducerPath]: GameApi.reducer,
  auth: AuthReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(AuthApi.middleware)
        .concat(GameApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from "./GameSlice.ts";
export * from "./AuthSlice.ts";
