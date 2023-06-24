import { FC } from "react";
import classes from "./Card.module.css";
import { IPlayerCard, CardType } from "../../interfaces";
import clsx from "clsx";
import {
  blue_card_back,
  green_card_back,
  red_card_back,
  yellow_card_back,
} from "../../assets";

import { Color } from "../../utils/constants";
import { DamageIcon, MpIcon, HpIcon } from "../";

const Card: FC<IPlayerCard> = ({
  id,
  type,
  name,
  damage,
  hp,
  manacost,
  ...rest
}) => {
  let typeBg;
  let backUrl;
  let color;
  switch (type) {
    case CardType.All:
      typeBg = "bg-yellow-400";
      backUrl = yellow_card_back;
      color = Color.YELLOW;
      break;
    case CardType.Left:
      typeBg = "bg-blue-400";
      backUrl = blue_card_back;
      color = Color.BLUE;
      break;
    case CardType.Right:
      typeBg = "bg-green-400";
      backUrl = green_card_back;
      color = Color.GREEN;
      break;
    case CardType.Straight:
      typeBg = "bg-red-400";
      backUrl = red_card_back;
      color = Color.RED;
      break;
    default:
      typeBg = "bg-grey-400";
  }

  return id ? (
    <div className={clsx(classes.card, typeBg, " bg-opacity-50 ", "relative")}>
      <div className="text-white ">{name}</div>
      <div
        className={"absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}
      >
        <MpIcon value={manacost} color={color} />
      </div>
      <div
        className={"absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"}
      >
        <DamageIcon value={damage} color={color} />
      </div>
      <div
        className={"absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"}
      >
        <HpIcon value={hp} color={color} />
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
