import { useEffect, useState } from "react";
import { useTimer } from "../services";
import { Button } from "../ui";

const EndTurnButton = () => {
  const { timeLeft, isTimeOver, startTimer, stopTimer } = useTimer(30);
  const [isTurnEnd, setIsTurnEnd] = useState(isTimeOver);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    isTimeOver && setIsTurnEnd(true);
  }, [isTimeOver]);

  const handleClick = () => {
    stopTimer();
    setIsTurnEnd(true);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-white font-sans text-xl">{timeLeft} sec</div>
      <Button disabled={isTurnEnd} onClick={handleClick}>
        End Turn
      </Button>
    </div>
  );
};

export default EndTurnButton;
