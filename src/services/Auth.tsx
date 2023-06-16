import { createContext, useContext, useState } from "react";
import { IPlayer, IPlayerLoginCreds } from "../interfaces";
// import { signIn as apiSignIn } from "../api";

interface IAuthContext {
  player: IPlayer | null;
  signIn: (playerCreds: IPlayerLoginCreds, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [player, setPlayer] = useState<IPlayer | null>(null);

  const signIn = async (_playerCreds: IPlayerLoginCreds, callback: VoidFunction) => {
    // const apiPlayer = await apiSignIn(playerCreds)
    setPlayer({email: "sasha@mail.ru", id: "1", name:"Sasha"});
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    setPlayer(null);
    callback();
  };

  const value = { player, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
