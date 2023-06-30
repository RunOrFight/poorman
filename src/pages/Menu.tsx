import { Navigate } from 'react-router-dom';
import { Button, Input, Window } from '../ui';
import { useSignalR } from '../services';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from '../widgets';
import {
  CreateGameStartAction,
  JoinGameStartAction,
  useAppDispatch,
  useAppSelector,
  useAuthSelector,
} from '../store';

const MenuPage = () => {
  const [allUsersJoinedGame, setAllUsersJoinedGame] = useState(false);
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const lobbyIdInput = useRef<HTMLInputElement>(null);

  const playerId = useAppSelector((state) => state.game.playerId);
  const gameId = useAppSelector((state) => state.game.gameId);
  const link = useAppSelector((state) => state.game.link);

  const user = useAuthSelector().user;

  const dispatch = useAppDispatch();

  const connection = useSignalR();

  useEffect(() => {
    connection.on('all_users_joined_lobby', () => {
      setAllUsersJoinedGame(true);
    });
    return () => {
      connection.off('all_users_joined_lobby');
    };
  });

  const handleCreateLobbyButtonClick = useCallback(async () => {
    setIsWindowVisible(true);
    dispatch(CreateGameStartAction({ userId: user.id }));
  }, [user.id, dispatch]);

  const handleJoinLobbyButtonClick = useCallback(async () => {
    if (!lobbyIdInput.current?.value) {
      return;
    }
    dispatch(JoinGameStartAction({ link: lobbyIdInput.current.value, userId: user.id }));
  }, [user.id, dispatch]);

  if (allUsersJoinedGame && playerId && gameId) {
    return <Navigate to={`/game/${gameId}`} />;
  }

  return (
    <div className="flex justify-center flex-col items-center h-full gap-2">
      <div className="text-xl">You are logged as {user?.name}</div>
      <div className="flex w-full justify-center items-center gap-2">
        <Input ref={lobbyIdInput} />
        <Button onClick={handleJoinLobbyButtonClick}>Join Lobby</Button>
        <div className="text-xl">Or</div>
        <Button onClick={handleCreateLobbyButtonClick}>Create Lobby</Button>
      </div>
      {link && (
        <Window isVisible={isWindowVisible} setIsVisible={setIsWindowVisible}>
          <CopyToClipboard link={link} />
        </Window>
      )}
    </div>
  );
};

export default MenuPage;
