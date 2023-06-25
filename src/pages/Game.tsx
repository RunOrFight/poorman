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
import { useEffect, useState } from "react";
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
    if (connection) {
      connection.on("start_battle", () => {
        console.log("START_BATTLE");
      });

      connection.off("update_game_data");
      connection.on("update_game_data", (data: string) => {
        if (data !== lastData) {
          console.log("UPDATE_DATA");
          const parsedData: IGameData = JSON.parse(data);
          dispatch(setGameData(parsedData));
        }
        lastData = data;
      });
      connection.off("card_attack");
      connection.on("card_attack", (data) => {
        console.log("CARD_ATTACK");
        const parsedData: ICardAttack = JSON.parse(data);
        anime({
          targets: `.player #card_${parsedData.attackingCard.id}`,
          translateY: [
            { value: 100, duration: 500 },
            { value: -50, duration: 200 },
            { value: 0, duration: 500 },
          ],
          scale: [
            { value: 1.2, duration: 500 },
            { value: 1, duration: 200 },
          ],
          easing: "easeOutElastic(1, .8)",
        });
        anime({
          targets: `.enemy #card_${parsedData.attackingCard.id}`,
          translateY: [
            { value: -100, duration: 500 },
            { value: 50, duration: 200 },
            { value: 0, duration: 500 },
          ],
          scale: [
            { value: 1.2, duration: 500 },
            { value: 1, duration: 200 },
          ],
          delay: 100,
          easing: "easeOutElastic(1, .8)",
        });
      });
      if (!isGameLoaded) {
        loadGame({ gameId, playerId });
      }
    }

    () => {
      connection.off("update_game_data");
      connection.off("card_attack");
    };
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
    <div className="h-full w-full flex justify-center items-center">
      <PAlert>Game is not loaded</PAlert>
    </div>
  );
};

export default GamePage;
