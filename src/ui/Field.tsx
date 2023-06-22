import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import { Card } from "./index.ts";
import { IPlayerCard } from "../interfaces/Game.ts";

interface IFieldProps {
  id: string;
  card: null | IPlayerCard;
}

const Field: FC<IFieldProps> = ({ id, card }) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: { card } });

  const bgStyle = isOver
    ? card
      ? "border-red-300"
      : "border-green-300"
    : "border-grey-300";
  return (
    <div
      className={`w-44 h-full bg-cover bg-no-repeat flex items-center justify-center border ${bgStyle} `}
      id="field"
      ref={setNodeRef}
    >
      {card && <Card {...card} />}
    </div>
  );
};

export default Field;
