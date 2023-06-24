import { Card, Field } from "../ui";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  movePlayerCardToField,
  useAppDispatch,
  useAppSelector,
  usePlayerFieldsSelector,
  usePlayerSelector,
} from "../store";
import { useThrowCardMutation } from "../api";
import { DraggableCard } from ".";

const Player = () => {
  const dispatch = useAppDispatch();
  const cardsInHand = usePlayerSelector().cardsInHand;
  const playerId = useAppSelector((state) => state.game.playerId);
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
    throwCard({ playerId, cardId: active.id, field: over.id });
  };

  // const mock = [
  //     {
  //       id: 40,
  //       playerId: 23,
  //       cardId: 7,
  //       cardIn: 0,
  //       isDead: false,
  //       manacost: 1,
  //       hp: 2,
  //       damage: 21,
  //       name: 'card7',
  //       type: 3,
  //       sideState: 0
  //     },
  //     {
  //       id: 41,
  //       playerId: 23,
  //       cardId: 6,
  //       cardIn: 0,
  //       isDead: false,
  //       manacost: 55,
  //       hp: 21,
  //       damage: 1,
  //       name: 'card6',
  //       type: 2,
  //       sideState: 0
  //     },
  //     {
  //       id: 42,
  //       playerId: 23,
  //       cardId: 16,
  //       cardIn: 0,
  //       isDead: false,
  //       manacost: 1,
  //       hp: 1,
  //       damage: 1,
  //       name: 'card16',
  //       type: 0,
  //       sideState: 0
  //     }
  //   ]

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full w-full flex flex-col p-2.5">
        <div className="flex h-full justify-center gap-[30px] items-center">
          {fields.map((field) => (
            <Field id={field.id} key={field.id} card={field.data} />
          ))}
        </div>
        <div className="w-full h-full flex gap-[58px] items-center justify-center p-2.5">
          {cardsInHand.map((card) => (
            <DraggableCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Player;
