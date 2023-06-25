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
import { useLoadGameMutation } from "../api";
import { Enemy } from "../widgets";
import { divider } from "../assets";
import anime from "animejs/lib/anime.es.js";
import { Navigate } from "react-router-dom";

let eventStack = [] as any[];

const GamePage = () => {
  const connection = useSignalR();
  const [loadGame, { isSuccess }] = useLoadGameMutation();
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const isGameLoaded = useAppSelector((state) => state.game.isGameLoaded!);
  const dispatch = useAppDispatch();
  const [isBattleStarted, setIsBattleStarted] = useState(false);

  if (!connection) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (isBattleStarted) {
      connection.off("update_game_data");
      connection.on("update_game_data", (data) => {
        const parsedData = JSON.parse(data);
        eventStack.push({ eventName: "update_game_data", data: parsedData });
      });
    } else {
      connection.off("update_game_data");
      connection.on("update_game_data", (data) => {
        const parsedData = JSON.parse(data);
        dispatch(setGameData(parsedData));
        console.log("OLD");
      });
    }
  }, [isBattleStarted]);

  useEffect(() => {
    connection.on("start_battle", () => {
      setIsBattleStarted(true);
    });

    connection.on("card_attack", (data) => {
      setIsBattleStarted(true);
      const parsedData = JSON.parse(data);
      eventStack.push({ eventName: "card_attack", data: parsedData });
    });

    connection.on("turn_start", async () => {
      for (const event of eventStack) {
        if (event.eventName === "card_attack") {
          await playAnimation(event.data);
        } else if (event.eventName === "update_game_data") {
          dispatch(setGameData(event.data));
        }
      }
      eventStack = [];
      setIsBattleStarted(false);
    });

    connection.on("player_win", (data) => {
      alert(data);
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
    <div className="h-full w-full flex justify-center items-center">
      <PAlert>Game is not loaded</PAlert>
    </div>
  );
};

export default GamePage;

async function playAnimation(data) {
  await new Promise((complete) => {
    anime({
      targets: `.player #card_${data.attackingCard.id}`,
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
      complete,
    });
    anime({
      targets: `.enemy #card_${data.attackingCard.id}`,
      translateY: [
        { value: -100, duration: 500 },
        { value: 50, duration: 200 },
        { value: 0, duration: 500 },
      ],
      scale: [
        { value: 1.2, duration: 500 },
        { value: 1, duration: 200 },
      ],
      easing: "easeOutElastic(1, .8)",
    });
  });
}
