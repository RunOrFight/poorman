import { FC, memo, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';

import { Card } from '../index.ts';
import { IEnemyCardHidden, IEnemyCardOpen, IPlayerCard } from '../../interfaces';

import classes from './Field.module.css';

interface IFieldProps {
  id: string;
  card: IPlayerCard | IEnemyCardHidden | IEnemyCardOpen | null;
}

const Field: FC<IFieldProps> = memo(({ id, card }) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: { card } });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.field} id={id} ref={setNodeRef}>
      {isOver && !card && (
        <div className="w-full h-full bg-green-500 opacity-20 absolute left-0 top-0 z-10"></div>
      )}
      <div className="w-full h-full bg-red-500 absolute left-0 top-0 z-10 opacity-0 under-attack"></div>
      {card && <Card {...card} ref={ref} />}
    </div>
  );
});

export default Field;
