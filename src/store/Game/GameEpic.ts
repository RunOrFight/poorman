import { AppEpic } from '../index.ts';
import { combineEpics } from 'redux-observable';
import { gameStartEpic } from './GameStartEpic.ts';

const GameEpic: AppEpic = combineEpics(gameStartEpic);

export { GameEpic };
