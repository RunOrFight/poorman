import { useDraggable } from '@dnd-kit/core';
import { usePlayerSelector } from '../store';
import { Card } from '../ui';
import { CSS } from '@dnd-kit/utilities';
import { FC, useEffect, useRef } from 'react';
import { IPlayerCard } from '../interfaces';
import anime from 'animejs/lib/anime.es.js';
import { getCardPropertiesByType } from '../utils';

interface IPlayerCardProps {
  card: IPlayerCard;
}

const PlayerCard: FC<IPlayerCardProps> = ({ card }) => {
  const mana = usePlayerSelector().manaCurrent;
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: card.id,
    disabled: card.manacost > mana,
  });
  const style = { transform: CSS.Translate.toString(transform) };
  const ref = useRef<HTMLDivElement | null>(null!);
  const { arrows } = getCardPropertiesByType(card.type, isDragging);
  useEffect(() => {
    anime({
      targets: ref.current,
      translateX: [1000, 0],
      duration: 800,
      rotate: '1turn',
      easing: 'spring(1, 80, 15 , 0)',
    });
  }, []);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={'relative grow max-w-[170px]'}
    >
      {arrows}
      <Card {...card} ref={ref} />
    </div>
  );
};

export default PlayerCard;
