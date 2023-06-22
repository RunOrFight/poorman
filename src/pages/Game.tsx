import { Side } from "../ui";
import {
  EndTurnButton,
  EnemyHero,
  LeftSide,
  Player,
  PlayerHero,
  SpaceBg,
} from "../widgets";
import {
  usePlayerSelector,
  useEnemySelector,
  useAppSelector,
  useAppDispatch,
  setGameData,
} from "../store";
import { useSignalR } from "../services";
import { useEffect } from "react";
import { IGameData } from "../interfaces";
import { useLoadGameMutation } from "../api";

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
      console.log(parsedData, "HERE DATA");
    });
    loadGame({ gameId, playerId }).then((response) => {
      console.log(response, "Response from server");
    });
  }, []);

  return (
    <SpaceBg>
      <div className="flex w-full h-full max-w-[1250px] m-auto">
        <LeftSide />

        <div className="flex flex-col h-full w-full">
          <div className="h-full w-full"></div>

          <div className="w-full h-10">
            <img src="/src/assets/divider.png" />
          </div>

          {/* <Player /> */}
        </div>

        <Side extraClassName="justify-start items-center">
          <EnemyHero />
          <div className="h-full flex items-center">
            <EndTurnButton />
          </div>
        </Side>
      </div>
    </SpaceBg>
  );
};

export default GamePage;
