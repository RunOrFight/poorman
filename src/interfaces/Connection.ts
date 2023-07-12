import { HubConnection } from '@microsoft/signalr';
import { ICardAttack, ICardIsDead, IGame, IGameData, TPlayerWin } from '.';

export interface IEvents {
  all_users_joined_lobby: { gameId: IGame['id'] };
  turn_start: undefined;
  update_game_data: IGameData;
  card_attack: ICardAttack;
  start_battle: undefined;
  player_win: TPlayerWin;
  card_is_dead: ICardIsDead;
}

export interface ExtendedConnection extends HubConnection {
  on: <T extends keyof IEvents>(methodName: T, newMethod: (data: string) => void) => void;
  off: (methodName: keyof IEvents) => void;
}
