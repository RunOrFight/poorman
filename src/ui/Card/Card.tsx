import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import classes from  "./Card.module.css"

interface CardProps {
  id: number;
  disabled?: boolean
}
const Card: FC<CardProps> = ({ id , disabled = false}) => {
  console.log(id)
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id , disabled});
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={classes.card}
    />
  );
};

export default Card;
