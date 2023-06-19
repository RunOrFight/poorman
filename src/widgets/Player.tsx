import { ReactNode, useState } from "react";
import { Card, Field, Hand } from "../ui";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const fields = ["A", "B", "C"];
const cards = [{ id: "1" }, { id: "2" }, { id: "3" }];

const Player = () => {
  const [parent, setParent] = useState<string | null>(null);
  const [active, setActive] = useState<ReactNode | null>(null);
  const [cardsInHand, setCardsInHand] = useState(() =>
    cards.map((card) => <Card {...card} key={card.id} />)
  );

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    setParent(over ? (over.id as string) : null);
    setCardsInHand((prev) =>
      prev.filter((card) => {
        if (card.props.id === active.id) {
          setActive(card);
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full w-full flex flex-col">
        <div className="flex justify-center">
          {fields.map((field) => (
            <Field id={field} key={field}>
              {parent === field ? active : null}
            </Field>
          ))}
        </div>
        <div className="w-full h-full border flex gap-2 items-center">
          {cardsInHand}
        </div>
      </div>
    </DndContext>
  );
};

export default Player;
