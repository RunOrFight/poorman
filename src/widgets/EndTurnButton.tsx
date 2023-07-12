import { Button } from '../ui';
import { sound_click } from '../assets';
import {
  CardAttackStartAction,
  EndTurnStart,
  SetGameDataStartAction,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { card1, card2, card3, card4 } from '../utils';
import { isGameOnlyMode } from '../constants';

const EndTurnButton = () => {
  const playerId = useAppSelector((state) => state.game.playerId!);
  const dispatch = useAppDispatch();

  const testHandleClick = () => {
    dispatch(
      CardAttackStartAction({
        attackingCard: card2,
        attackingPlayerId: 1,
        field: 1,
        fieldsUnderAttack: [],
        playerUnderAttackId: 2,
      })
    );
    dispatch(
      CardAttackStartAction({
        attackingCard: card3,
        attackingPlayerId: 2,
        field: 1,
        fieldsUnderAttack: [],
        playerUnderAttackId: 1,
      })
    );
    dispatch(
      SetGameDataStartAction({
        playerData: {
          field1: { ...card2, hp: 3 },
          cardsInHand: [card1],
          hp: 25,
          name: 'Player1',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 2,
          manaCurrent: 2,
        },
        enemyData: {
          field1: { ...card3, hp: 3 },
          cardsInHand: [card4],
          hp: 25,
          name: 'Player2',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 2,
        },
      })
    );
    dispatch(
      CardAttackStartAction({
        attackingCard: card2,
        attackingPlayerId: 1,
        field: 1,
        fieldsUnderAttack: [],
        playerUnderAttackId: 2,
      })
    );
    dispatch(
      CardAttackStartAction({
        attackingCard: card3,
        attackingPlayerId: 2,
        field: 1,
        fieldsUnderAttack: [],
        playerUnderAttackId: 1,
      })
    );
    dispatch(
      SetGameDataStartAction({
        playerData: {
          field1: { ...card2, hp: 2 },
          cardsInHand: [card1],
          hp: 20,
          name: 'Player1',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 3,
          manaCurrent: 3,
        },
        enemyData: {
          field1: { ...card3, hp: 2 },
          cardsInHand: [card4],
          hp: 20,
          name: 'Player2',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 3,
        },
      })
    );
    dispatch(
      SetGameDataStartAction({
        playerData: {
          field1: { ...card2, hp: 2 },
          cardsInHand: [card1],
          hp: 20,
          name: 'Player1',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 3,
          manaCurrent: 3,
        },
        enemyData: {
          field1: { ...card3, hp: 2 },
          cardsInHand: [card4],
          hp: 20,
          name: 'Player2',
          field2: null,
          field3: null,
          field4: null,
          manaCommon: 3,
        },
      })
    );
    // dispatch();
    // PlayerWinAction({
    //   name: 'Sasha',
    //   cardsInHand: [],
    //   field1: null,
    //   field2: null,
    //   field3: null,
    //   field4: null,
    //   hp: 30,
    //   manaCommon: 0,
    //   manaCurrent: 0,
    // })
  };

  const handleClick = () => {
    new Audio(sound_click).play();

    dispatch(EndTurnStart({ playerId }));
  };

  const isTurnEnd = useAppSelector((s) => s.game.isTurnEnd);

  return (
    <div className="flex flex-col items-center gap-2">
      {/*<div className="text-white font-sans text-xl">{timeLeft} sec</div>*/}
      <Button disabled={isTurnEnd} onClick={isGameOnlyMode ? testHandleClick : handleClick}>
        {isTurnEnd ? 'Wait for battle' : 'End Turn'}
      </Button>
    </div>
  );
};

export default EndTurnButton;
