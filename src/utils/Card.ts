import { blue_card_back, green_card_back, red_card_back, yellow_card_back } from '../assets';
import { CardType } from '../interfaces';
import { Color, bgColor } from '../constants';

export function getCardPropertiesByType(type: CardType) {
  switch (type) {
    case CardType.All:
      return {
        backUrl: yellow_card_back,
        color: Color.YELLOW,
        bgColor: bgColor.YELLOW,
      };

    case CardType.Left:
      return {
        backUrl: blue_card_back,
        color: Color.BLUE,
        bgColor: bgColor.BLUE,
      };

    case CardType.Right:
      return {
        backUrl: green_card_back,
        color: Color.GREEN,
        bgColor: bgColor.GREEN,
      };

    case CardType.Straight:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: bgColor.RED,
      };

    default:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: bgColor.RED,
      };
  }
}
