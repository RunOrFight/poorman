import { FC, PropsWithChildren } from "react";
import { useAuth } from "../services";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.player) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
