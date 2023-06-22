import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import { Card } from "./index.ts";
import { IPlayerCard } from "../interfaces/Game.ts";
import { field } from "../assets/index.ts";

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
      style={{ backgroundImage: `url(${field})` }}
      className={`h-[165px] w-[120px] bg-center bg-contain bg-no-repeat ${bgStyle}`}
      id="field"
      ref={setNodeRef}
    >
      {card && <Card {...card} />}
    </div>
  );
};

export default Field;
