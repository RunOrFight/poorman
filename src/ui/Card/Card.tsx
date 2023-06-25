import { forwardRef, memo } from "react";
import classes from "./Card.module.css";
import {
  IEnemyCardHidden,
  IEnemyCardOpen,
  IPlayerCard,
} from "../../interfaces";

import { DamageIcon, MpIcon, HpIcon } from "../";
import { getCardPropertiesByType } from "../../utils/card";

const Card = memo(
  forwardRef<HTMLDivElement, IPlayerCard | IEnemyCardHidden | IEnemyCardOpen>(
    (card, ref) => {
      const { backUrl, color } = getCardPropertiesByType(card.type);
      const isPlayerCard =
        "hp" in card && "damage" in card && "manacost" in card;

      return isPlayerCard ? (
        <div ref={ref} className={classes.card} id={`card_${card.id}`}>
          <img
            src={card.imageUrl}
            alt="nola"
            className="w-full h-full object-cover select-none pointer-events-none "
          />
          <div
            className={
              "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            }
          >
            <MpIcon value={card.manacost} color={color!} />
          </div>
          <div
            className={
              "absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
            }
          >
            <DamageIcon value={card.damage} color={color!} />
          </div>
          <div
            className={
              "absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
            }
          >
            <HpIcon value={card.hp} color={color!} />
          </div>
        </div>
      ) : (
        <div
          id={`card_${card.id}`}
          className={classes.card}
          style={{ backgroundImage: `url(${backUrl})` }}
        ></div>
      );
    }
  )
);

export default Card;
