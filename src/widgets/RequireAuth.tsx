import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useSignalR } from '../services';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  BattleStartAction,
  CardAttackAction,
  SetGameDataAction,
  TurnStartAction,
  useAppDispatch,
  useAuthSelector,
} from '../store';
import { InfiniteProgress } from '../ui';

const Cube = ({ id }: { id: string }) => (
  <div className="w-20 h-20 bg-amber-200  text-2xl text-center leading-[5rem]" id={id}>
    <span className="hp">5</span>
  </div>
);

const RequireAuth: FC<PropsWithChildren> = () => {
  const [isConnected, setIsConnected] = useState(false);
  const isAuthorized = useAuthSelector().isAuthorized;
  const user = useAuthSelector().user;
  const connection = useSignalR();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // isAuthorized
    //   ? connection.invoke('SetUserId', user.id).then(() => {
    //       setIsConnected(true);
    //     })
    //   : navigate('/game/login', { state: { from: location }, replace: true });

    dispatch(BattleStartAction());

    dispatch(CardAttackAction({ cardId: 'card1', isEnemy: false }));
    dispatch(CardAttackAction({ cardId: 'card6', isEnemy: true }));

    dispatch(SetGameDataAction({}));

    dispatch(CardAttackAction({ cardId: 'card2', isEnemy: false }));
    dispatch(CardAttackAction({ cardId: 'card7', isEnemy: true }));

    dispatch(SetGameDataAction({}));

    dispatch(CardAttackAction({ cardId: 'card3', isEnemy: false }));
    dispatch(CardAttackAction({ cardId: 'card8', isEnemy: true }));

    dispatch(SetGameDataAction({}));

    dispatch(CardAttackAction({ cardId: 'card4', isEnemy: false }));
    dispatch(CardAttackAction({ cardId: 'card9', isEnemy: true }));

    dispatch(SetGameDataAction({}));

    dispatch(CardAttackAction({ cardId: 'card5', isEnemy: false }));
    dispatch(CardAttackAction({ cardId: 'card10', isEnemy: true }));

    dispatch(SetGameDataAction({}));

    dispatch(TurnStartAction());
    dispatch(SetGameDataAction({}));
  }, []);

  return isConnected ? (
    <Outlet />
  ) : (
    <div className="flex flex-col gap-3 w-full h-full justify-center items-center">
      <div className="flex gap-1 enemy">
        <Cube id={'card6'} />
        <Cube id={'card7'} />
        <Cube id={'card8'} />
        <Cube id={'card9'} />
        <Cube id={'card10'} />
      </div>
      <div className="flex gap-1 player">
        <Cube id={'card1'} />
        <Cube id={'card2'} />
        <Cube id={'card3'} />
        <Cube id={'card4'} />
        <Cube id={'card5'} />
      </div>
    </div>
  );
};

export default RequireAuth;
