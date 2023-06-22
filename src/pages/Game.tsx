import { Side } from "../ui";
import { EndTurnButton, Player, SpaceBg } from "../widgets";
import { usePlayerSelector, useEnemySelector, useAppSelector } from "../store";
import { useSignalR } from "../services";
import { useEffect } from "react";
import { IGameData } from "../interfaces";
import { useLoadGameMutation } from "../api";

const GamePage = () => {
  const connection = useSignalR();
  const playerName = usePlayerSelector().name;
  const playerHp = usePlayerSelector().hp;
  const enemyName = useEnemySelector().name;
  const enemyHp = useEnemySelector().hp;

  const [loadGame] = useLoadGameMutation();
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);

  useEffect(() => {
    connection.on("update_game_data", (data: string) => {
      const parsedData: IGameData = JSON.parse(data)
      console.log(parsedData, "HERE DATA");
    });
    loadGame({ gameId, playerId }).then((response) => {
      console.log(response, "Response from server");
    });
  }, []);

  return (
    <SpaceBg>
      <div className="flex w-full h-full">
        <Side extraClassName="justify-end">
          <div className="text-xl">{playerName}</div>
          <div className="text-xl">{playerHp}</div>
          {/*<Hero />*/}
        </Side>

        <div className="flex flex-col h-full w-full">
          <div className="h-full w-full"></div>

          <div className="w-full h-10">
            <img src="/src/assets/divider.png" />
          </div>

          <Player />
        </div>

        <Side extraClassName="justify-start items-center">
          {/*<Hero />*/}
          <div className="text-xl">{enemyName}</div>
          <div className="text-xl">{enemyHp}</div>
          <div className="h-full flex items-center">
            <EndTurnButton />
          </div>
        </Side>
      </div>
    </SpaceBg>
  );
};

export default GamePage;
