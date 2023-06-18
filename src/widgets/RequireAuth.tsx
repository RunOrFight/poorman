import { FC, PropsWithChildren } from "react";
import { useAuth } from "../services";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
