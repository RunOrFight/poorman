import { FC, PropsWithChildren } from 'react';
import { WithConnection } from '../services';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthSelector } from '../store';

const RequireAuth: FC<PropsWithChildren> = () => {
  const isAuthorized = useAuthSelector().isAuthorized;

  return isAuthorized ? WithConnection(<Outlet />) : <Navigate to="/game/login" replace={true} />;
};

export default RequireAuth;
