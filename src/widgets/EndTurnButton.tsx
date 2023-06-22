import {useEffect, useState} from "react";
import {useTimer} from "../services";
import {Button} from "../ui";
import {useAppSelector} from "../store";
import {useEndTurnMutation} from "../api";

const EndTurnButton = () => {
    // const { timeLeft, isTimeOver, startTimer, stopTimer } = useTimer(30);
    const [isTurnEnd, setIsTurnEnd] = useState(false);
    const playerId = useAppSelector(state => state.game.playerId);
    const [endTurn] = useEndTurnMutation();

    // useEffect(() => {
    //   startTimer();
    // }, []);

    // useEffect(() => {
    //   isTimeOver && setIsTurnEnd(true);
    // }, [isTimeOver]);

    const handleClick = () => {
        // stopTimer();
        setIsTurnEnd(true);
        endTurn({playerId})
    };

    return (
        <div className="flex flex-col items-center gap-2">
            {/*<div className="text-white font-sans text-xl">{timeLeft} sec</div>*/}
            <Button disabled={isTurnEnd} onClick={handleClick}>
                End Turn
            </Button>
        </div>
    );
};

export default EndTurnButton;
