import { animePromise, playerWinAnimation, toCloseTheVeil } from '.';
import {
  IGameData,
  ICardAttack,
  ICardIsDead,
  IPlayer,
  TEventsQueue,
  TPlayerWin,
} from '../interfaces';
import { AppDispatch, PlayerWinAction, SetGameDataOkAction } from '../store';
import { resolveCardAttack } from './ResolveCardAttack';
import { resolveCardIsDead } from './ResolveCardIsDead';

const runQueue = async (
  eventsQueue: TEventsQueue,
  currentPlayerId: IPlayer['id'],
  dispatch: AppDispatch
) => {
  for (const eventsQueueItem of eventsQueue) {
    const { data, type } = eventsQueueItem;
    switch (type) {
      case 'update_game_data':
        dispatch(SetGameDataOkAction(data as IGameData));
        break;
      case 'card_attack':
        await resolveCardAttack(currentPlayerId, data as ICardAttack);
        break;
      case 'card_is_dead':
        await resolveCardIsDead(currentPlayerId, data as ICardIsDead);
        break;
      case 'player_win':
        dispatch(PlayerWinAction(data as TPlayerWin));
        await animePromise(playerWinAnimation);
        await animePromise(toCloseTheVeil);
        break;
      default:
        break;
    }
  }
};

export { runQueue };
