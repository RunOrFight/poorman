import { Button, PAlert } from '../ui';
import { LeftSide, Player, RightSide, SpaceBg } from '../widgets';
import { Enemy } from '../widgets';
import { divider } from '../assets';
import { isGameOnlyMode } from '../constants';
import { useGameFlow, useLoadGame } from '../utils';
import { useAppDispatch, useAppSelector } from '../store';
import { memo } from 'react';
import { push } from 'redux-first-history';

const GamePage = memo(() => {
  const isGameLoadedSuccessfully = useLoadGame();

  useGameFlow();

  const playerWin = useAppSelector((s) => s.game.playerWin);

  const dispatch = useAppDispatch();

  return isGameLoadedSuccessfully || isGameOnlyMode ? (
    <>
      <SpaceBg>
        <div className="flex w-full h-full ] justify-center items-center text-white overflow-hidden">
          <div className="max-w-[1080px] max-h-[810px] h-full w-full flex">
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
        </div>
      </SpaceBg>
      <div className="text-white text-4xl absolute top-[45%] left-[45%] opacity-0 player-win z-20 flex flex-col items-center justify-center gap-2">
        {`${playerWin} Win`}
        <Button onClick={() => dispatch(push('/game'))}> Go to menu</Button>
      </div>
    </>
  ) : (
    <div className="h-full w-full flex justify-center items-center">
      <PAlert>Game is not loaded</PAlert>
    </div>
  );
});

export default GamePage;
