import { useEffect, useState } from 'react';
import { useSignalR } from '../services';
import { Button } from '../ui';
import {
  CardAttackStartAction,
  EndTurnStart,
  SetGameDataOkAction,
  SetGameDataStartAction,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { card1, card2, card3, card4 } from '../utils';
import { isGameOnlyMode } from '../constants';

const EndTurnButton = () => {
  const [isTurnEnd, setIsTurnEnd] = useState(false);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const connection = useSignalR();
  const dispatch = useAppDispatch();

  useEffect(() => {
    connection.on('turn_start', () => {
      setIsTurnEnd(false);
    });
  });

  const testHandleClick = () => {
    dispatch(CardAttackStartAction({ attackingCard: card2, attackingPlayerId: 1 }));
    dispatch(CardAttackStartAction({ attackingCard: card3, attackingPlayerId: 2 }));
    dispatch(
      SetGameDataStartAction({
        playerData: { field1: { ...card2, hp: 3 }, cardsInHand: [card1], hp: 25, name: 'Player1' },
        enemyData: { field1: { ...card3, hp: 3 }, cardsInHand: [card4], hp: 25, name: 'Player2' },
      })
    );
    dispatch(CardAttackStartAction({ attackingCard: card2, attackingPlayerId: 1 }));
    dispatch(CardAttackStartAction({ attackingCard: card3, attackingPlayerId: 2 }));
    dispatch(
      SetGameDataStartAction({
        playerData: { field1: { ...card2, hp: 2 }, cardsInHand: [card1], hp: 20, name: 'Player1' },
        enemyData: { field1: { ...card3, hp: 2 }, cardsInHand: [card4], hp: 20, name: 'Player2' },
      })
    );
  };

  const handleClick = () => {
    setIsTurnEnd(true);
    dispatch(EndTurnStart({ playerId }));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button disabled={isTurnEnd} onClick={isGameOnlyMode ? testHandleClick : handleClick}>
        {isTurnEnd ? 'Wait for battle' : 'End Turn'}
      </Button>
    </div>
  );
};

export default EndTurnButton;
