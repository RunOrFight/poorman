import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from "./index.ts";


const initialState = {
  playerData: {
    name: "Sasha",
    hp: "30",
     cardsInHand: [{id: 1}, {id: 2} ,{id: 3}],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  },
  enemyData:{
    name: "Ignat",
    hp: "30",
     cardsInHand: [],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  }
};

interface IMoveCardToFieldPayload{
  cardId: number,
  fieldId: string
}

const GameSlice =  createSlice({
  name: 'game',
  initialState,
  reducers: {
    movePlayerCardToField: (state, action: PayloadAction<IMoveCardToFieldPayload>)=>{
      state.playerData[action.payload.fieldId] = {id: action.payload.cardId}
      state.playerData.cardsInHand =  state.playerData.cardsInHand.filter(card=>card.id !== action.payload.cardId)
      return state
    }
  },
});

const {reducer : GameReducer,actions } =  GameSlice
const {movePlayerCardToField} = actions
export {GameReducer,movePlayerCardToField}
export const usePlayerSelector = () => {
  return useAppSelector(state => state.game.playerData);
};
export const useEnemySelector = () => {
  return useAppSelector(state => state.game.enemyData);
};

export const usePlayerFieldsSelector=()=>{
  return [
    {id: "field1", data: usePlayerSelector().field1},
    {id: "field2", data: usePlayerSelector().field2},
    {id: "field3", data: usePlayerSelector().field3},
    {id: "field4", data: usePlayerSelector().field4}
  ]
}