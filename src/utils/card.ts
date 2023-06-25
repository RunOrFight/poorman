import {
  blue_card_back,
  blue_cat,
  green_card_back,
  green_haski,
  nola,
  red_card_back,
  yellow_card_back,
  yellow_sfinx,
} from "../assets";
import { CardType } from "../interfaces";
import { Color } from "./constants";

export function getCardPropertiesByType(type: CardType) {
  switch (type) {
    case CardType.All:
      return {
        backUrl: yellow_card_back,
        color: Color.YELLOW,
        imgSrc: yellow_sfinx,
      };

    case CardType.Left:
      return { backUrl: blue_card_back, color: Color.BLUE, imgSrc: blue_cat };

    case CardType.Right:
      return {
        backUrl: green_card_back,
        color: Color.GREEN,
        imgSrc: green_haski,
      };

    case CardType.Straight:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        imgSrc: nola,
      };

    default:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        imgSrc: nola,
      };
  }
}
