import { FC, PropsWithChildren } from "react";
import { SignalRProvider } from "../services";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthSelector } from "../store";

const RequireAuth: FC<PropsWithChildren> = () => {
  const isAuthorized = useAuthSelector().isAuthorized;

  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <SignalRProvider>
      <Outlet />
    </SignalRProvider>
  );
};

export default RequireAuth;
