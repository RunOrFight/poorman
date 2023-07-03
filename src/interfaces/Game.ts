import { IUser } from '.';

export interface IEnemyCardHidden {
  id: number;
  type: CardType;
  // sideState: SideState;
}

export interface IPlayerCard extends IEnemyCardHidden {
  playerId: number;
  isDead: boolean;
  manacost: number;
  hp: number;
  damage: number;
  name: string;
  imageUrl: string;
}

export type IEnemyCardOpen = IPlayerCard;

export interface IGameData {
  playerData: IPlayerData;
  enemyData: IEnemyData;
}

export interface IPlayerData {
  name: string;
  hp: number;
  manaCommon: number;
  manaCurrent: number;
  cardsInHand: IPlayerCard[];
  field1: IPlayerCard | null;
  field2: IPlayerCard | null;
  field3: IPlayerCard | null;
  field4: IPlayerCard | null;
}

export interface IEnemyData {
  name: string;
  hp: number;
  manaCommon: number;
  cardsInHand: IEnemyCardHidden[];
  field1: IEnemyCardHidden | IEnemyCardOpen | null;
  field2: IEnemyCardHidden | IEnemyCardOpen | null;
  field3: IEnemyCardHidden | IEnemyCardOpen | null;
  field4: IEnemyCardHidden | IEnemyCardOpen | null;
}

export interface IPlayer {
  id: number;
  gameId: number;
  game: IGame;
  userId: number;
  user: IUserData;
  isLoaded: boolean;
  turnEnded: boolean;
  hp: number;
  manaCommon: number;
  manaCurrent: number;
  cards: IPlayerCard[];
}

export interface IUserData {
  id: number;
  name: string;
}

export interface IGame {
  id: number;
  link: string;
  players: IPlayer[];
  isFinished: boolean;
}

export interface ICardAttack {
  field: number;
  attackingPlayerId: IPlayer['id'];
  attackingCard: IPlayerCard;
  playerUnderAttackId: IPlayer['id'];
  fieldsUnderAttack: IPlayerCard[];
}

export interface ICardIsDead {
  field: number;
  playerId: IPlayer['id'];
}

export enum CardIn {
  Hand,
  Field1,
  Field2,
  Field3,
  Field4,
}

export enum CardType {
  Straight,
  Left,
  Right,
  All,
}

export interface IFindGameResponse {
  playerId: number;
  gameId: number;
}

export interface IJoinGameResponse {
  playerId: number;
  gameId: number;
}
export interface IFindGamePayload {
  userId: IUser['id'];
}

export interface IJoinGamePayload {
  userId: IUser['id'];
  link: string;
}

export interface ILoadGamePayload {
  playerId: IPlayer['id'];
  gameId: IGame['id'];
}

export interface ILoadGameResponse {
  success: boolean;
}

export interface IThrowCartPayload {
  playerId: IPlayer['id'];
  cardId: IPlayerCard['id'];
  field: CardIn;
}

export interface IThrowCartResponse {
  success: boolean;
}

export interface IEndTurnPayload {
  playerId: IPlayer['id'];
}

export interface IEndTurnResponse {
  success: boolean;
}
