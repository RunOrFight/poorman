import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./index.ts";
import { GameApi } from "../api/GameApi.ts";

const initialState = {
  link: null as string | null,
  gameId: null as number | null,
  playerId: null as number | null,
  isGameLoaded: false,
  playerData: {
    name: "Sasha",
    hp: "30",
    cardsInHand: [{ id: 1, name: "Hello" }, { id: 2 }, { id: 3 }],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  },
  enemyData: {
    name: "Ignat",
    hp: "30",
    cardsInHand: [],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  },
};

interface IMoveCardToFieldPayload {
  cardId: number;
  fieldId: string;
}

const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    movePlayerCardToField: (
      state,
      action: PayloadAction<IMoveCardToFieldPayload>
    ) => {
      state.playerData[action.payload.fieldId] = { id: action.payload.cardId };
      state.playerData.cardsInHand = state.playerData.cardsInHand.filter(
        (card) => card.id !== action.payload.cardId
      );
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
const { movePlayerCardToField } = actions;
export { GameReducer, movePlayerCardToField };
export const usePlayerSelector = () => {
  return useAppSelector((state) => state.game.playerData);
};
export const useEnemySelector = () => {
  return useAppSelector((state) => state.game.enemyData);
};

export const usePlayerFieldsSelector = () => {
  return [
    { id: "field1", data: usePlayerSelector().field1 },
    { id: "field2", data: usePlayerSelector().field2 },
    { id: "field3", data: usePlayerSelector().field3 },
    { id: "field4", data: usePlayerSelector().field4 },
  ];
};
