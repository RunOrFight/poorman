import { isGameOnlyMode } from '../../constants';
import { IEnemyData, IPlayerCard, IPlayerData } from '../../interfaces';
import { card1, card2, card3 } from '../../utils';

const cardsInHand: IPlayerCard[] = isGameOnlyMode ? [card1] : [];

const field1 = isGameOnlyMode ? card2 : null;

const playerId = isGameOnlyMode ? 1 : null;

export const GameState = {
  link: null as string | null,
  gameId: null as number | null,
  playerId,
  isGameLoaded: false,
  playerData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: isGameOnlyMode ? 'Player1' : '',
    hp: isGameOnlyMode ? 30 : 0,
    cardsInHand,
    field1,
    field2: null,
    field3: null,
    field4: null,
  } as IPlayerData,
  enemyData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: isGameOnlyMode ? 'Player2' : '',
    hp: isGameOnlyMode ? 30 : 0,
    cardsInHand: [],
    field1: isGameOnlyMode ? card3 : null,
    field2: null,
    field3: null,
    field4: null,
  } as IEnemyData,
};
