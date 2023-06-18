import { useNavigate } from "react-router-dom";
import { Button, InfiniteProgress, Input, Window } from "../ui";
import { useCreateLobby, useJoinLobby } from "../services";
import { useCallback, useState } from "react";
import { WaitForLobby } from "../widgets";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:5157";

const MenuPage = () => {
  const navigate = useNavigate();
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const [lobbyIdInputText, setLobbyIdInputText] = useState("");

  const { data, requestStatus, createLobby } = useCreateLobby();
  const { joinLobby } = useJoinLobby();

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },

    onMessage: (e) => {
      console.log(e);
    },
  });

  const handleCreateLobbyButtonClick = useCallback(() => {
    setIsWindowVisible(true);
    createLobby();
  }, []);

  const handleJoinLobbyButtonClick = useCallback(() => {
    joinLobby(lobbyIdInputText);
  }, [lobbyIdInputText]);

  return (
    <div className="flex justify-center flex-col items-center h-full gap-2">
      <div className="w-full">
        {requestStatus === "pending" && <InfiniteProgress />}
      </div>
      <div className="flex w-full justify-center items-center gap-2">
        <Input
          value={lobbyIdInputText}
          onChange={(e) => setLobbyIdInputText(e.target.value)}
        />
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
