import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./index.ts";
import { GameApi } from "../api/GameApi.ts";
import {
  IEnemyData,
  IGameData,
  IPlayerData,
} from "../interfaces/Game.ts";
import { useMemo } from "react";

const initialState = {
  link: null as string | null,
  gameId: null as number | null,
  playerId: null as number | null,
  isGameLoaded: false,
  playerData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: "",
    hp: 0,
    cardsInHand: [],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  } as IPlayerData,
  enemyData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: "",
    hp: 0,
    cardsInHand: [],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  } as IEnemyData,
};

const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameData: (state, action: PayloadAction<IGameData>) => {
      const { enemyData, playerData } = action.payload;

      state.enemyData.field1 = enemyData.field1;
      state.enemyData.field2 = enemyData.field2;
      state.enemyData.field3 = enemyData.field3;
      state.enemyData.field4 = enemyData.field4;
      state.enemyData.name = enemyData.name;
      state.enemyData.hp = enemyData.hp;
      state.enemyData.cardsInHand = enemyData.cardsInHand;

      state.playerData.field1 = playerData.field1;
      state.playerData.field2 = playerData.field2;
      state.playerData.field3 = playerData.field3;
      state.playerData.field4 = playerData.field4;
      state.playerData.manaCurrent = playerData.manaCurrent;
      state.playerData.hp = playerData.hp;
      state.playerData.name = playerData.name;
      state.playerData.cardsInHand = playerData.cardsInHand;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      GameApi.endpoints.createGame.matchFulfilled,
      (state, { payload }) => {
        state.link = payload.link;
        state.gameId = payload.gameId;
        state.playerId = payload.playerId;
        return state;
      }
    );
    builder.addMatcher(
      GameApi.endpoints.joinGame.matchFulfilled,
      (state, { payload }) => {
        state.gameId = payload.gameId;
        state.playerId = payload.playerId;
        return state;
      }
    );
    builder.addMatcher(
      GameApi.endpoints.loadGame.matchFulfilled,
      (state, { payload }) => {
        state.isGameLoaded = payload.success;
        return state;
      }
    );
  },
});

const { reducer: GameReducer, actions } = GameSlice;
const { setGameData } = actions;

export { GameReducer, setGameData };
export const usePlayerSelector = () => {
  return useAppSelector((state) => state.game.playerData);
};
export const useEnemySelector = () => {
  return useAppSelector((state) => state.game.enemyData);
};

export const usePlayerFieldsSelector = () => {
  const field1 = usePlayerSelector().field1;
  const field2 = usePlayerSelector().field2;
  const field3 = usePlayerSelector().field3;
  const field4 = usePlayerSelector().field4;
  return useMemo(
    () => [
      { id: "Field1", data: field1 },
      { id: "Field2", data: field2 },
      { id: "Field3", data: field3 },
      { id: "Field4", data: field4 },
    ],
    [field1, field2, field3, field4]
  );
};

export const useEnemyFieldsSelector = () => {
  const field1 = useEnemySelector().field1;
  const field2 = useEnemySelector().field2;
  const field3 = useEnemySelector().field3;
  const field4 = useEnemySelector().field4;
  return useMemo(
    () => [
      { id: "Field1", data: field1 },
      { id: "Field2", data: field2 },
      { id: "Field3", data: field3 },
      { id: "Field4", data: field4 },
    ],
    [field1, field2, field3, field4]
  );
};
