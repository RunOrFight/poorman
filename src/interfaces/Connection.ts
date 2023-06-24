import { HubConnection } from "@microsoft/signalr";
import { ICardAttack, IGame } from ".";

interface Envents {
  all_users_joined_lobby: [{ gameId: IGame["id"] }];
  turn_start: [];
  update_game_data: [data: string];
  card_attack: [cardAttack: ICardAttack];
}

export interface ExtendedConnection extends HubConnection {
  on: <T extends keyof Envents>(
    methodName: T,
    newMethod: (...args: Envents[T]) => any
  ) => void;
}
