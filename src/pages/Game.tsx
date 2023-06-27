import { PAlert } from '../ui';
import { LeftSide, Player, RightSide, SpaceBg } from '../widgets';
import { Enemy } from '../widgets';
import { divider } from '../assets';
import { isGameOnlyMode } from '../constants';
import { useGameFlow, useLoadGame } from '../utils';

const GamePage = () => {
  const isGameLoadedSuccessfully = useLoadGame();

  useGameFlow();

  return isGameLoadedSuccessfully || isGameOnlyMode ? (
    <SpaceBg>
      <div className="flex w-full h-full max-w-[1250px] m-auto text-white overflow-hidden">
        <LeftSide />

        <div className="flex flex-col h-full w-full">
          <Enemy />

          <div className="w-full h-10">
            <img src={divider} className="w-full h-full object-contain" alt="divider" />
          </div>

          <Player />
        </div>
        <RightSide />
      </div>
    </SpaceBg>
  ) : (
    <div className="h-full w-full flex justify-center items-center">
      <PAlert>Game is not loaded</PAlert>
    </div>
  );
};

export default GamePage;
