import { createContext, useContext, useState } from "react";
import { IPlayer, IPlayerLoginCreds } from "../interfaces";
import { signIn as apiSignIn } from "../api";
import { useLocalStorage } from ".";

interface IAuthContext {
  player: IPlayer | null;
  signIn: (playerCreds: IPlayerLoginCreds, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [storedPlayer, setStoredPlayer] = useLocalStorage<IPlayer | null>(
    "player",
    null
  );
  const signIn = async (
    playerCreds: IPlayerLoginCreds,
    callback: VoidFunction
  ) => {
    const apiPlayer = await apiSignIn(playerCreds);
    if (!apiPlayer) {
      return;
    }
    setStoredPlayer(apiPlayer);
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    setStoredPlayer(null);
    callback();
  };

  const value = { player: storedPlayer, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
