import { FC } from "react";
import classes from "./Card.module.css";
import { IPlayerCard, CardType } from "../../interfaces";
import clsx from "clsx";

const Card: FC<IPlayerCard> = ({ id, type, name, ...rest }) => {
  let typeBg;

  switch (type) {
    case CardType.All:
      typeBg = "bg-yellow-400";
      break;
    case CardType.Left:
      typeBg = "bg-blue-400";
      break;
    case CardType.Right:
      typeBg = "bg-green-400";
      break;
    case CardType.Straight:
      typeBg = "bg-red-400";
      break;
    default:
      typeBg = "bg-grey-400";
  }

  return (
    <div
      className={clsx(
        classes.card,
        typeBg,
        " bg-opacity-50 border-2  border-purple"
      )}
    >
      <div className="text-white ">{name}</div>
    </div>
  );
};

export default Card;
