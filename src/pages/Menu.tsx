import { useNavigate } from "react-router-dom";
import { Button, InfiniteProgress, Input, Window } from "../ui";
import { useAuth, useCreateLobby, useJoinLobby, useSignalR } from "../services";
import { useCallback, useEffect, useRef, useState } from "react";
import { WaitForLobby } from "../widgets";
import { IAllUsersJoinedLobbyResponse } from "../interfaces/SignalR";

// const WS_URL = "ws://localhost:3000/socket.io";

const MenuPage = () => {
  const navigate = useNavigate();
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const lobbyIdInput = useRef<HTMLInputElement>(null);
  const { data, requestStatus, createLobby } = useCreateLobby();
  const { joinLobby } = useJoinLobby();

  const { user } = useAuth();

  const connection = useSignalR();
  useEffect(() => {
    connection.on(
      "all_users_joined_lobby",
      ([{ gameId }]: [IAllUsersJoinedLobbyResponse]) => {
        console.log("ok");
        navigate(`game/${gameId}`);
      }
    );
  }, []);

  const handleCreateLobbyButtonClick = useCallback(() => {
    setIsWindowVisible(true);
    createLobby();
  }, []);

  const handleJoinLobbyButtonClick = useCallback(() => {
    lobbyIdInput.current?.value && joinLobby(lobbyIdInput.current.value);
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
