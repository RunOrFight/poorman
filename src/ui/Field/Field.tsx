import { FC } from "react";
import clsx from "clsx";
import { useDroppable } from "@dnd-kit/core";

import { Card } from "../index.ts";
import { IPlayerCard } from "../../interfaces/Game.ts";

import classes from "./Field.module.css";

interface IFieldProps {
  id: string;
  card: null | IPlayerCard;
  isEnemy: boolean;
}

const Field: FC<IFieldProps> = ({ id, card, isEnemy = false }) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: { card } });

  const bgStyle = isOver
    ? card
      ? "border-red-300"
      : "border-green-300"
    : "border-grey-300";

  return (
    <div
      className={clsx(classes.field, bgStyle, isEnemy && classes.rotate)}
      id="field"
      ref={setNodeRef}
    >
      {card && (
        <Card card={card} location={isEnemy ? "enemyField" : "playerField"} />
      )}
    </div>
  );
};

export default Field;
