import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./index.ts";
import { GameApi } from "../api/GameApi.ts";
import {
  CardType,
  IEnemyData,
  IGameData,
  IPlayerData,
  SideState,
} from "../interfaces/Game.ts";

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
    cardsInHand: [
      {
        id: 11,
        damage: 1,
        hp: 2,
        manacost: 1,
        type: CardType.All,
        name: "Sasha",
        imageUrl: "",
        isDead: false,
        playerId: 12,
      },
    ],
    field1: {
      id: 12,
      damage: 1,
      hp: 2,
      manacost: 1,
      type: CardType.Left,
      name: "Sasha",
      imageUrl: "",
      isDead: false,
      playerId: 12,
    },
    field2: null,
    field3: null,
    field4: null,
  } as IPlayerData,
  enemyData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: "",
    hp: 0,
    cardsInHand: [{ id: 12, type: CardType.Left }],
    field1: {
      id: 55,
      damage: 1,
      hp: 2,
      manacost: 1,
      type: CardType.Left,
      name: "Sasha",
      imageUrl: "",
      isDead: false,
      playerId: 13,
    },
    field2: {
      id: 66,
      type: CardType.Straight,
    },
    field3: null,
    field4: null,
  } as IEnemyData,
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
      return {
        ...state,
        playerData: {
          ...state.playerData,
          cardsInHand: state.playerData.cardsInHand.filter(
            (card) => card.id !== action.payload.cardId
          ),
        },
      };
    },
    setGameData: (state, action: PayloadAction<IGameData>) => {
      const { enemyData, playerData } = action.payload;
      const newState = {
        ...state,
        enemyData: { ...enemyData, cardsInHand: enemyData.cardsInHand },
        playerData: { ...playerData, cardsInHand: playerData.cardsInHand },
      };
      return newState;
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
const { movePlayerCardToField, setGameData } = actions;

export { GameReducer, movePlayerCardToField, setGameData };

export const usePlayerSelector = () => {
  return useAppSelector((state) => state.game.playerData);
};
export const useEnemySelector = () => {
  return useAppSelector((state) => state.game.enemyData);
};

export const usePlayerFieldsSelector = () => {
  return [
    { id: "Field1", data: usePlayerSelector().field1 },
    { id: "Field2", data: usePlayerSelector().field2 },
    { id: "Field3", data: usePlayerSelector().field3 },
    { id: "Field4", data: usePlayerSelector().field4 },
  ];
};

export const useEnemyFieldsSelector = () => {
  return [
    { id: "Field1", data: useEnemySelector().field1 },
    { id: "Field2", data: useEnemySelector().field2 },
    { id: "Field3", data: useEnemySelector().field3 },
    { id: "Field4", data: useEnemySelector().field4 },
  ];
};
