import { FC, memo } from "react";
import clsx from "clsx";
import { useDroppable } from "@dnd-kit/core";

import { Card } from "../index.ts";
import {
  IEnemyCardHidden,
  IEnemyCardOpen,
  IPlayerCard,
} from "../../interfaces";

import classes from "./Field.module.css";

interface IFieldProps {
  id: string;
  card: IPlayerCard | IEnemyCardHidden | IEnemyCardOpen | null;
}

const Field: FC<IFieldProps> = memo(
  ({ id, card }) => {
    const { setNodeRef, isOver } = useDroppable({ id, data: { card } });

    const bgStyle = isOver
      ? card
        ? "border-red-300"
        : "border-green-300"
      : "border-grey-300";

    return (
      <div className={clsx(classes.field, bgStyle)} id="field" ref={setNodeRef}>
        {card && <Card {...card} />}
      </div>
    );
  },
  (prev, cur) => prev.id === cur.id && prev.card?.id === cur.card?.id
);

export default Field;
