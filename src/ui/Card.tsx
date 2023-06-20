import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  id: number;
  disabled?: boolean
}
const Card: FC<CardProps> = ({ id , disabled = false}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id , disabled});
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-40 h-60  bg-contain bg-no-repeat bg-center bg-red-200 rounded"
    />
  );
};

export default Card;
