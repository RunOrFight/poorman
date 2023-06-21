import { FC, PropsWithChildren } from "react";
import { SignalRProvider } from "../services";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthSelector } from "../store";

const RequireAuth: FC<PropsWithChildren> = () => {
  const isAutorized = useAuthSelector().isAutorized;

  const location = useLocation();

  if (!isAutorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <SignalRProvider>
      <Outlet />
    </SignalRProvider>
  );
};

export default RequireAuth;
