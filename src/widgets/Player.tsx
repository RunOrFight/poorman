import { Field } from '../ui';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import {
  usePlayerFieldsSelector,
  useAppSelector,
  usePlayerSelector,
  useAppDispatch,
  CardThrowStart,
} from '../store';
import { PlayerCard } from '.';
import { CardIn } from '../interfaces';

const Player = () => {
  const cardsInHand = usePlayerSelector().cardsInHand;
  const playerId = useAppSelector((state) => state.game.playerId!);
  const fields = usePlayerFieldsSelector();
  const dispatch = useAppDispatch();
  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!over?.id || over.data.current?.card) {
      return;
    }
    dispatch(
      CardThrowStart({
        playerId,
        cardId: active.id as number,
        field: over.id as CardIn,
      })
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full w-full flex flex-col player z-10">
        <div className="flex h-full gap-[30px] justify-center items-center">
          {fields.map((field) => (
            <Field id={field.id} key={field.id} card={field.data} />
          ))}
        </div>
        <div className="w-full flex gap-2.5 items-center justify-center h-[190px] hand pt-[22px] pb-[27px]">
          {cardsInHand.map((card) => (
            <PlayerCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Player;
