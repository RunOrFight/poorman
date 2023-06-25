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
      const { backUrl, color, imgSrc } = getCardPropertiesByType(card.type);
      const isPlayerCard =
        "hp" in card && "damage" in card && "manacost" in card;

      const getCardProperties = () => {
        return (
            <>
              <div className={"absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}>
                <MpIcon value={manacost} color={color} />
              </div>
              <div className={"absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"}>
                <DamageIcon value={damage} color={color} />
              </div>
              <div className={"absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"}>
                <HpIcon value={hp} color={color} />
              </div>
            </>
        )
      }

      const dataForColor = {
        border: `2px solid ${color}`,
        backgroundColor: "rgba(78, 71, 6, 1)", //color,
      }

      return isPlayerCard ? (
        <div ref={ref} className={classes.card} id={`card_${card.id}`}  style={dataForColor}>
          <div className={classes.front}>
            <div className={classes.img} style={{
              backgroundImage: `url(${imgSrc})`,
              ...dataForColor
            }}>
              {getCardProperties()}
            </div>
            <div className="123">{name}</div>

          </div>

          <div className={classes.back} style={{ backgroundImage: `url(${backUrl})` }} />
        </div>
      ) : (
        <div
          id={`card_${card.id}`}
          className={classes.card}
          style={{ backgroundImage: `url(${backUrl})` }}
        ></div>
      );
    }
  ),
  (prev, cur) => prev.id === cur.id
);

export default Card;
