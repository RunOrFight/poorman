import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "../ui";
import { IPlayerCard } from "../interfaces";

const DraggableCard: FC<IPlayerCard> = (card) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div className={"relative"} ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card {...card} />
    </div>
  );
};

export default DraggableCard;
