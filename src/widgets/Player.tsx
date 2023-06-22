import { Card, Field } from "../ui";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  movePlayerCardToField,
  useAppDispatch, useAppSelector,
  usePlayerFieldsSelector,
  usePlayerSelector,
} from "../store";
import {useThrowCardMutation} from '../api'

const Player = () => {
  const dispatch = useAppDispatch();
  const cardsInHand = usePlayerSelector().cardsInHand;
  const playerId = useAppSelector(state => state.game.playerId);
  const fields = usePlayerFieldsSelector();
  const [throwCard] = useThrowCardMutation();

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!over?.id || over.data.current?.card) {
      return;
    }
    dispatch(
      movePlayerCardToField({
        fieldId: over.id as string,
        cardId: active.id as number,
      })
    );
    throwCard({playerId, cardId: active.id, field: over.id})

  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full w-full flex flex-col p-2.5">
        <div className="flex h-full justify-center">
          {fields.map((field) => (
            <Field id={field.id} key={field.id} card={field.data} />
          ))}
        </div>
        <div className="w-full h-full border flex gap-2.5 items-center p-2.5">
          {cardsInHand.map((card) => (
            <Card key={card.id} id={card.id} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Player;
