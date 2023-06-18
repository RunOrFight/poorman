export interface IUserLoginCreds {
  email: string;
  password: string;
}

export interface IUser extends Omit<IUserLoginCreds, "password"> {
  name: string;
  id: number;
}
