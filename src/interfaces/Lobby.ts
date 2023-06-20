export interface ICreateLobbyResponse {
  link: string;
  playerId: number;
  gameId: number;
}

export interface IJoinLobbyResponse {
  playerId: number;
  gameId: number;
}
