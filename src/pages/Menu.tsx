import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";
import { createLobby as createLobbyApi } from "../api/LobbyApi";
import { useAuth } from "../services";

const MenuPage = () => {
  const navigate = useNavigate();

  const joinLobby = () => {
    navigate("/game");
  };

  const { player } = useAuth();

  const createLobby = async () => {
    if (!player) {
      return;
    }
    const data = await createLobbyApi({ userId: player.id });
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Input />
      <Button onClick={joinLobby}>Join Lobby</Button>
      <Button onClick={createLobby}>Create Lobby</Button>
    </div>
  );
};

export default MenuPage;
