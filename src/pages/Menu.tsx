import { useNavigate } from "react-router-dom";
import { Button, InfiniteProgress, Input, Window } from "../ui";
import { useCreateLobby, useJoinLobby } from "../services";
import {useCallback, useEffect, useState} from "react";
import { WaitForLobby } from "../widgets";
import { HubConnectionBuilder } from '@microsoft/signalr';


// const WS_URL = "ws://localhost:3000/socket.io";

const MenuPage = () => {
  const [connection, setConnection] = useState(null);
  const navigate = useNavigate();
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const [lobbyIdInputText, setLobbyIdInputText] = useState("");

  const { data, requestStatus, createLobby } = useCreateLobby();
  const { joinLobby } = useJoinLobby();

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:5157/socket') // Замените на правильный URL вашего сервера SignalR
        .withAutomaticReconnect()
        .build();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setConnection(newConnection);

  }, [])

  useEffect(() => {
    if (connection) {
      connection.start()
          .then(() => {
            console.log('Connected to the server.');
            console.log(JSON.parse(localStorage.user).id)
            connection.invoke("SetUserId", JSON.parse(localStorage.user).id)
                .then(() => {
                  console.log("SetUserId invoked successfully.");
                })
                .catch((error) => {
                  console.error("Failed to invoke SetUserId:", error);
                });
          })
          .catch((error) => {
            console.error('Failed to connect to the server: ', error);
          });

      connection.on("all_users_joined_lobby", () => {
        console.log("All users joined lobby")
      })
    }
  }, [connection]);

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
