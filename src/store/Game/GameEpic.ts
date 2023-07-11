import { AppEpic } from '../index.ts';
import { combineEpics } from 'redux-observable';
import { gameStartEpic } from './GameStartEpic.ts';
import { gamePlayEpic } from './GamePlayEpic.ts';

const GameEpic: AppEpic = combineEpics(gameStartEpic, gamePlayEpic);

export { GameEpic };
