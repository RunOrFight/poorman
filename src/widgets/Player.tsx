import { Field } from '../ui';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { usePlayerFieldsSelector, useAppSelector, usePlayerSelector } from '../store';
import { useThrowCardMutation } from '../api';
import { PlayerCard } from '.';
import { CardIn } from '../interfaces';

const Player = () => {
  const cardsInHand = usePlayerSelector().cardsInHand;
  const playerId = useAppSelector((state) => state.game.playerId!);
  const fields = usePlayerFieldsSelector();
  const [throwCard] = useThrowCardMutation();
  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!over?.id || over.data.current?.card) {
      return;
    }

    throwCard({
      playerId,
      cardId: active.id as number,
      field: over.id as CardIn,
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full w-full flex flex-col p-2.5 player">
        <div className="flex h-full justify-center gap-[30px] items-center">
          {fields.map((field) => (
            <Field id={field.id} key={field.id} card={field.data} />
          ))}
        </div>
        <div className="w-full h-full flex gap-2.5 items-center justify-center p-2.5 hand">
          {cardsInHand.map((card) => (
            <PlayerCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Player;
