import { Side} from "../ui";
import { EndTurnButton, Player } from "../widgets";
import {usePlayerSelector, useEnemySelector} from "../store";
import {useGame, useSignalR} from "../services";
import {useEffect} from "react";

const GamePage = () => {
  const connection = useSignalR();
  const { playerId, gameId, loadGame } = useGame();
  const playerName = usePlayerSelector().name
  const playerHp = usePlayerSelector().hp
  const enemyName = useEnemySelector().name
  const enemyHp = useEnemySelector().hp

  useEffect(() => {
    console.log(connection);
    connection.on('update_game_data', (data: IGameData) => {
      console.log(data, 'HERE DATA');
    });

    loadGame(playerId, gameId).then(response => {
      console.log(response, 'Resoinse from server')
    })
  }, [])

  return (
    <div id="bg" className="bg-contain w-full h-full">
      <div className="flex w-full h-full">
        <Side extraClassName="justify-end">
            <div className="text-xl">{playerName}</div>
            <div className="text-xl">{playerHp}</div>
          {/*<Hero />*/}
        </Side>

        <div className="flex flex-col h-full w-full">
          <div className="h-full w-full"></div>

          <div className="w-full h-10">
            <img src="src/assets/devider.png" />
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
    </div>
  );
};

export default GamePage;
