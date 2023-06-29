import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useSignalR } from '../services';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthSelector } from '../store';
import { InfiniteProgress } from '../ui';

const RequireAuth: FC<PropsWithChildren> = () => {
  const [isConnected, setIsConnected] = useState(false);
  const isAuthorized = useAuthSelector().isAuthorized;
  const user = useAuthSelector().user;
  const connection = useSignalR();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthorized
      ? connection.invoke('SetUserId', user.id).then(() => {
          setIsConnected(true);
        })
      : navigate('/game/login', { state: { from: location }, replace: true });
  }, []);

  return isConnected ? <Outlet /> : <InfiniteProgress />;
};

export default RequireAuth;
