import { useNavigate } from "react-router-dom";
import { Button, InfiniteProgress, Input, Window } from "../ui";
import { useAuth, useSignalR, useGame } from "../services";
import { useCallback, useEffect, useRef, useState } from "react";
import { WaitForLobby } from "../widgets";
import {IAllUsersJoinedLobbyResponse, ICreateLobbyResponse} from "../interfaces";

const MenuPage = () => {
  const navigate = useNavigate();
  const [requestStatus, setRequestStatus] = useState('');
  const [data, setData] = useState<ICreateLobbyResponse>(null);
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const lobbyIdInput = useRef<HTMLInputElement>(null);
  const { createLobby, joinLobby } = useGame();

  const { user } = useAuth();

  const connection = useSignalR();
  useEffect(() => {
    console.log('IN USE EFFECT')
    connection.on(
      "all_users_joined_lobby",
      ([{ gameId }]: [IAllUsersJoinedLobbyResponse]) => {
        console.log('All users joined lobby')
        navigate(`game/${gameId}`);
      }
    );
  }, []);

  const handleCreateLobbyButtonClick = useCallback(async() => {
    setIsWindowVisible(true);
      const response = await createLobby(user.id);
      console.log(response);
      setData(response);
      setRequestStatus('done');
  }, []);

  const handleJoinLobbyButtonClick = useCallback(async () => {
    if (lobbyIdInput.current?.value) {
      const response = await joinLobby(user.id, lobbyIdInput.current.value);
      console.log(response);
    }
  }, []);

  return (
    <div className="flex justify-center flex-col items-center h-full gap-2">
      <div className="text-xl">You're logged as {user?.name}</div>
      <div className="w-full">
        {requestStatus === "pending" && <InfiniteProgress />}
      </div>
      <div className="flex w-full justify-center items-center gap-2">
        <Input ref={lobbyIdInput} />
        <Button onClick={handleJoinLobbyButtonClick}>Join Lobby</Button>
        <div className="text-xl">Or</div>
        <Button onClick={handleCreateLobbyButtonClick}>Create Lobby</Button>
      </div>
      {requestStatus === "done" && (
        <Window isVisible={isWindowVisible} setIsVisible={setIsWindowVisible}>
          <WaitForLobby lobbyId={data?.link!} />
        </Window>
      )}
    </div>
  );
};

export default MenuPage;
