import { HubConnection } from '@microsoft/signalr';
import { IGame } from '.';

interface Events {
  all_users_joined_lobby: [{ gameId: IGame['id'] }];
  turn_start: [];
  update_game_data: [data: string];
  card_attack: [data: string];
  start_battle: [];
  player_win: [data: string];
}

export interface ExtendedConnection extends HubConnection {
  on: <T extends keyof Events>(methodName: T, newMethod: (...args: Events[T]) => void) => void;
}
