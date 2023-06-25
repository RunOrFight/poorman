import { useDraggable } from "@dnd-kit/core";
import { usePlayerSelector } from "../store";
import { Card } from "../ui";
import { CSS } from "@dnd-kit/utilities";
import { FC, useEffect, useRef } from "react";
import { IPlayerCard } from "../interfaces";
import anime from "animejs/lib/anime.es.js";

interface IPlayerCardProps {
  card: IPlayerCard;
}

const PlayerCard: FC<IPlayerCardProps> = ({ card }) => {
  const mana = usePlayerSelector().manaCurrent;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    disabled: card.manacost > mana,
  });
  const style = { transform: CSS.Translate.toString(transform) };
  const ref = useRef<HTMLDivElement | null>(null!);

  useEffect(() => {
    anime({
      targets: ref.current,
      translateX: [1000, 0],
      duration: 800,
      rotate: "1turn",
      easing: "spring(1, 80, 15 , 0)",
    });
  }, []);

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card {...card} ref={ref} />
    </div>
  );
};

export default PlayerCard;
