import { Navigate } from "react-router-dom";
import { Button, InfiniteProgress, Input, Window } from "../ui";
import { useSignalR } from "../services";
import { useCallback, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "../widgets";
import { useAppSelector, useAuthSelector } from "../store";
import { useCreateGameMutation, useJoinGameMutation } from "../api";
import { IUser } from "../interfaces";

const MenuPage = () => {
  const [allUsersJoinedGame, setAllUsersJoinedGame] = useState(false);
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const lobbyIdInput = useRef<HTMLInputElement>(null);
  const [createGame, { isLoading, isSuccess }] = useCreateGameMutation();
  const [joinLobby] = useJoinGameMutation();
  const playerId = useAppSelector((state) => state.game.playerId);
  const gameId = useAppSelector((state) => state.game.gameId);

  const { user } = useAuthSelector() as { user: IUser };

  const connection = useSignalR();

  useEffect(() => {
    connection.on("all_users_joined_lobby", () => {
      setAllUsersJoinedGame(true);
    });
    () => {
      connection.off("all_users_joined_lobby");
    };
  }, []);

  const handleCreateLobbyButtonClick = useCallback(async () => {
    setIsWindowVisible(true);
    createGame({ userId: user.id });
  }, []);

  const handleJoinLobbyButtonClick = useCallback(async () => {
    if (!lobbyIdInput.current?.value) {
      return;
    }
    joinLobby({ link: lobbyIdInput.current.value, userId: user.id });
  }, []);

  if (allUsersJoinedGame && playerId && gameId) {
    return <Navigate to={`/game/${gameId}`} />;
  }

  return (
    <div className="flex justify-center flex-col items-center h-full gap-2">
      <div className="text-xl">You're logged as {user?.name}</div>
      <div className="w-full">{isLoading && <InfiniteProgress />}</div>
      <div className="flex w-full justify-center items-center gap-2">
        <Input ref={lobbyIdInput} />
        <Button onClick={handleJoinLobbyButtonClick}>Join Lobby</Button>
        <div className="text-xl">Or</div>
        <Button onClick={handleCreateLobbyButtonClick}>Create Lobby</Button>
      </div>
      {isSuccess && (
        <Window isVisible={isWindowVisible} setIsVisible={setIsWindowVisible}>
          <CopyToClipboard />
        </Window>
      )}
    </div>
  );
};

export default MenuPage;
