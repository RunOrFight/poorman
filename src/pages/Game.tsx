import { Side } from "../ui";
import {
  EndTurnButton,
  EnemyHero,
  LeftSide,
  Player,
  SpaceBg,
} from "../widgets";
import { useAppSelector, useAppDispatch, setGameData } from "../store";
import { useSignalR } from "../services";
import { useEffect } from "react";
import { IGameData } from "../interfaces";
import { useLoadGameMutation } from "../api";
import Enemy from "../widgets/Enemy";
import { divider } from "../assets";

const GamePage = () => {
  const connection = useSignalR();

  const [loadGame] = useLoadGameMutation();
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!connection) {
      return;
    }
    connection.on("update_game_data", (data: string) => {
      const parsedData: IGameData = JSON.parse(data);
      dispatch(setGameData(parsedData));
    });
    loadGame({ gameId, playerId }).then((response) => {
      console.log(response, "Response from server");
    });
    connection.on("card_attack", (card) => {
      console.log(card, "card_attack");
    });
  }, []);

  return (
    // <SpaceBg>
    <div className="flex w-full h-full max-w-[1250px] m-auto text-white overflow-hidden">
      <LeftSide />

      <div className="flex flex-col h-full w-full">
        <Enemy />

        <div className="w-full h-10">
          <img src={divider} className="w-full h-full object-contain" />
        </div>

        <Player />
      </div>

      <Side extraClassName="justify-start items-center">
        <EnemyHero />
        <div className="h-full flex items-center">
          <EndTurnButton />
        </div>
      </Side>
    </div>
    // </SpaceBg>
  );
};

export default GamePage;
