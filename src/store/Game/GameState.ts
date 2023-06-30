import { IEnemyData, IPlayerData } from '../../interfaces';

export const GameState = {
  link: null as string | null,
  gameId: null as number | null,
  playerId: null as number | null,
  isGameLoaded: false,
  playerData: {
    manaCommon: 0,
    manaCurrent: 0,
    name: '',
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
    name: '',
    hp: 0,
    cardsInHand: [],
    field1: null,
    field2: null,
    field3: null,
    field4: null,
  } as IEnemyData,
};
