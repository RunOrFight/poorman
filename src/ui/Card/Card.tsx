import { FC, useEffect, useRef } from "react";
import classes from "./Card.module.css";
import { CardType, ICard } from "../../interfaces";
import clsx from "clsx";
import {
  blue_card_back,
  blue_cat,
  green_card_back,
  green_haski,
  nola,
  red_card_back,
  yellow_card_back,
  yellow_sfinx,
} from "../../assets";

import { Color } from "../../utils/constants";
import { DamageIcon, MpIcon, HpIcon } from "../";
import anime from "animejs/lib/anime.es.js";

interface ICardProps {
  card: ICard;
  location: string;
}

const Card: FC<ICardProps> = ({ card, location }) => {
  const { id, type, damage, hp, manacost } = card;
  const ref = useRef<HTMLDivElement | null>(null!);

  let typeBg;
  let backUrl;
  let color;
  let imgSrc;
  switch (type) {
    case CardType.All:
      typeBg = "bg-yellow-400";
      backUrl = yellow_card_back;
      color = Color.YELLOW;
      imgSrc = yellow_sfinx;
      break;
    case CardType.Left:
      typeBg = "bg-blue-400";
      backUrl = blue_card_back;
      color = Color.BLUE;
      imgSrc = blue_cat;
      break;
    case CardType.Right:
      typeBg = "bg-green-400";
      backUrl = green_card_back;
      color = Color.GREEN;
      imgSrc = green_haski;
      break;
    case CardType.Straight:
      typeBg = "bg-red-400";
      backUrl = red_card_back;
      color = Color.RED;
      imgSrc = nola;
      break;
    default:
      typeBg = "bg-grey-400";
  }

  useEffect(() => {
    if (ref.current?.classList.contains("playerHand")) {
      anime({
        targets: ref.current,
        translateX: [1000, 0],
        duration: 800,
        rotate: "1turn",
        easing: "spring(1, 80, 15 , 0)",
      });
    } else if (ref.current?.classList.contains("enemyHand")) {
      anime({
        targets: ref.current,
        translateX: [-1000, 0],
        duration: 800,
        rotate: "1turn",
        easing: "spring(1, 80, 15 , 0)",
      });
    }

    return () => {};
  }, []);

  return id ? (
    <div ref={ref} className={clsx(classes.card, typeBg, location)}>
      <img
        src={imgSrc}
        alt="nola"
        className="w-full h-full object-cover select-none pointer-events-none "
      />
      <div
        className={"absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}
      >
        <MpIcon value={manacost} color={color!} />
      </div>
      <div
        className={"absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"}
      >
        <DamageIcon value={damage} color={color!} />
      </div>
      <div
        className={"absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"}
      >
        <HpIcon value={hp} color={color!} />
      </div>
    </div>
  ) : (
    <div
      className={clsx(classes.card, "bg-no-repeat bg-contain bg-transparent")}
      style={{ backgroundImage: `url(${backUrl})` }}
    ></div>
  );
};

export default Card;
