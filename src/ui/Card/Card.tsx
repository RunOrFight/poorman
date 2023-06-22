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

const Card: FC<IPlayerCard> = ({ id, type, name, ...rest }) => {
  let typeBg;
  let backUrl;
  switch (type) {
    case CardType.All:
      typeBg = "bg-yellow-400";
      backUrl = yellow_card_back;
      break;
    case CardType.Left:
      typeBg = "bg-blue-400";
      backUrl = blue_card_back;
      break;
    case CardType.Right:
      typeBg = "bg-green-400";
      backUrl = green_card_back;
      break;
    case CardType.Straight:
      typeBg = "bg-red-400";
      backUrl = red_card_back;
      break;
    default:
      typeBg = "bg-grey-400";
  }

  return id ? (
    <div className={clsx(classes.card, typeBg, " bg-opacity-50 ")}>
      <div className="text-white ">{name}</div>
    </div>
  ) : (
    <div
      className={clsx(classes.card, "bg-no-repeat bg-contain bg-transparent")}
      style={{ backgroundImage: `url(${backUrl})` }}
    ></div>
  );
};

export default Card;
