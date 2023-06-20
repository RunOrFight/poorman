import { Side} from "../ui";
import {EndTurnButton, Player, SpaceBg} from "../widgets";
import {usePlayerSelector, useEnemySelector} from "../store";

const GamePage = () => {
  const playerName = usePlayerSelector().name
  const playerHp = usePlayerSelector().hp
  const enemyName = useEnemySelector().name
  const enemyHp = useEnemySelector().hp

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
     </SpaceBg>
  );
};

export default GamePage;
