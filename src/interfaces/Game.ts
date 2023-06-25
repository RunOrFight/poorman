import { IUser } from ".";

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
  cardsInHand: IPlayerCard[];
  field1: IPlayerCard | null;
  field2: IPlayerCard | null;
  field3: IPlayerCard | null;
  field4: IPlayerCard | null;
}

export interface IPlayerCard {
  id: number;
  playerId: number;
  player: IPlayer;
  cardId: number;
  card: ICard;
  cardIn: CardIn;
  isDead: boolean;
  manacost: number;
  hp: number;
  damage: number;
  name: string;
  type: CardType;
  imageUrl: string;
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

export interface ICard {
  id: number;
  name: string;
  type: CardType;
  manacost: number;
  hp: number;
  damage: number;
  imageUrl: string;
}

export interface ICardAttack {
  field: number;
  attackingPlayerId: IPlayer["id"];
  attackingCard: IPlayerCard;
  playerUnderAttackId: IPlayer["id"];
  fieldsUnderAttack: IPlayerCard[];
}

export interface ICardIsDead {
  field: number;
  playerId: IPlayer["id"];
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

export interface ICreateGameResponse {
  link: string;
  playerId: number;
  gameId: number;
}

export interface IJoinGameResponse {
  playerId: number;
  gameId: number;
}
export interface ICreteGamePayload {
  userId: IUser["id"];
}

export interface IJoinGamePayload {
  userId: IUser["id"];
  link: ICreateGameResponse["link"];
}

export interface ILoadGamePayload {
  playerId: IPlayer["id"];
  gameId: IGame["id"];
}

export interface ILoadGameResponse {
  success: boolean;
}

export interface IThrowCartPayload {
  playerId: IPlayer["id"];
  cardId: IPlayerCard["id"];
  field: CardIn;
}

export interface IThrowCartResponse {
  success: boolean;
}

export interface IEndTurnPayload {
  playerId: IPlayer["id"];
}

export interface IEndTurnResponse {
  success: boolean;
}
