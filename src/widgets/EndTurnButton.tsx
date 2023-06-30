import { useEffect, useState } from 'react';
import { useSignalR } from '../services';
import { Button } from '../ui';
import { EndTurnStart, useAppDispatch, useAppSelector } from '../store';

const EndTurnButton = () => {
  // const { timeLeft, isTimeOver, startTimer, stopTimer } = useTimer(30);
  const [isTurnEnd, setIsTurnEnd] = useState(false);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const connection = useSignalR();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // startTimer();
    if (!connection) {
      return;
    }
    connection.on('turn_start', () => {
      setIsTurnEnd(false);
    });
  });

  // useEffect(() => {
  //   isTimeOver && setIsTurnEnd(true);
  // }, [isTimeOver]);

  const handleClick = () => {
    // stopTimer();
    setIsTurnEnd(true);
    dispatch(EndTurnStart({ playerId }));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/*<div className="text-white font-sans text-xl">{timeLeft} sec</div>*/}
      <Button disabled={isTurnEnd} onClick={handleClick}>
        {isTurnEnd ? 'Wait for battle' : 'End Turn'}
      </Button>
    </div>
  );
};

export default EndTurnButton;
