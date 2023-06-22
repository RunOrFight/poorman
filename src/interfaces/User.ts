export interface IUserLoginCreds {
  email: string;
  password: string;
}

export interface IUserRegisterCreds extends IUserLoginCreds{
  name: string
}

export interface IUser extends Omit<IUserRegisterCreds, "password">{
  id: number
}
