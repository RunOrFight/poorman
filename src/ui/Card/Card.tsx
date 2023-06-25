import { FC, useEffect, useMemo, useRef, useState } from "react";
import classes from "./Card.module.css";
import { IPlayerCard, CardType } from "../../interfaces";
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
import { useDispatch } from "react-redux";
import { playAnimation, useAppSelector } from "../../store";

const Card: FC<IPlayerCard> = ({ id, type, name, damage, hp, manacost }) => {
  const dispatch = useDispatch();
  const playedAnimations = useAppSelector(
    (state) => state.game.playedAnimations.cardInHand
  );

  const isCardsInHandPlayed = useMemo(
    () => playedAnimations.includes(id),
    [id, playedAnimations]
  );

  const ref = useRef(null!);

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
    if (!isCardsInHandPlayed) {
      anime({
        targets: ref.current,
        translateX: [1000, 0],
        duration: 800,
        rotate: "1turn",
        easing: "spring(1, 80, 15 , 0)",
        complete: () => {
          dispatch(playAnimation({ type: "cardInHand", actor: id }));
        },
      });
    }

    return () => {};
  }, []);

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

  return id ? (
      <div ref={ref} className={classes.card} style={dataForColor}>
        <div className={classes.front}>
          <div className={classes.img} style={{
            backgroundImage: `url(${imgSrc})`,
            ...dataForColor
          }}>
            {getCardProperties()}
          </div>
          <div className="123">{name}</div>

        </div>

        <div className={classes.back} style={{ backgroundImage: `url(${backUrl})` }} >

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
