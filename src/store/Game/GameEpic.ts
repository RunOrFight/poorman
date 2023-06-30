import { AppEpic } from '../index.ts';
import { of } from 'rxjs';

const GameEpic: AppEpic = () => {
  return of({ type: 'TEST' });
};

export { GameEpic };
