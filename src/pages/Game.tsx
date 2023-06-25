import { PAlert, Side } from "../ui";
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
import { ICardAttack, IGameData } from "../interfaces";
import { useLoadGameMutation } from "../api";
import { Enemy } from "../widgets";
import { divider } from "../assets";
import anime from "animejs/lib/anime.es.js";
let lastData: string;
const GamePage = () => {
  const connection = useSignalR();
  const [loadGame, { isSuccess }] = useLoadGameMutation();
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const isGameLoaded = useAppSelector((state) => state.game.isGameLoaded!);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!connection) {
      return;
    }
    connection.on("update_game_data", (data: string) => {
      if (data !== lastData) {
        const parsedData: IGameData = JSON.parse(data);
        dispatch(setGameData(parsedData));
      }
      lastData = data;
    });

    connection.on("card_attack", (data) => {
      const parsedData: ICardAttack = JSON.parse(data);
      anime({
        targets: `#${parsedData.attackingCard.id}`,
        translateY: [100, 0],
        duration: 800,
        easing: "linear",
      });
    });
    if (!isGameLoaded) {
      loadGame({ gameId, playerId });
    }
  }, []);

  return isSuccess ? (
    <SpaceBg>
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
    </SpaceBg>
  ) : (
    <PAlert>Game is not loaded</PAlert>
  );
};

export default GamePage;
