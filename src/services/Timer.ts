import { useEffect, useRef, useState } from "react";

const useTimer = (start: number) => {
  const [timeLeft, setTimeLeft] = useState(start);
  const [isTimeOver, setIsTimeOver] = useState(false);

  const timer = useRef<any | null>(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeOver(true);
      timer.current && clearInterval(timer.current);
    }
  }, [timeLeft]);

  const startTimer = () => {
    if (timer.current) {
      return;
    }
    timer.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  const stopTimer = () => {
    timer.current && clearInterval(timer.current);
  };

  return { timeLeft, isTimeOver, startTimer, stopTimer };
};

export { useTimer };
