import { createContext, useContext } from "react";
import { IUser, IUserLoginCreds } from "../interfaces";
import { signIn as apiSignIn } from "../api";
import { useLocalStorage } from ".";

interface IAuthContext {
  user: IUser | null;
  signIn: (userCreds: IUserLoginCreds, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [storedUser, setStoredUser] = useLocalStorage<IUser | null>(
    "user",
    null
  );
  const signIn = async (userCreds: IUserLoginCreds, callback: VoidFunction) => {
    const apiUser = await apiSignIn(userCreds);
    if (!apiUser) {
      return;
    }
    setStoredUser(apiUser);
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    setStoredUser(null);
    callback();
  };

  const value = { user: storedUser, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
