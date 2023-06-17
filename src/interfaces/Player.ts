export interface IPlayerLoginCreds {
  email: string;
  password: string;
}

export interface IPlayer extends Omit<IPlayerLoginCreds, "password"> {
  name: string;
  id: number;
}
