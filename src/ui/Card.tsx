import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  id: string;
}
const Card: FC<CardProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div
      id={id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-40 h-60  bg-contain bg-no-repeat bg-center bg-red-200 rounded"
    />
  );
};

export default Card;
