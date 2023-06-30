import {
  blue_arrow,
  blue_card_back,
  green_arrow,
  green_card_back,
  red_arrow,
  red_card_back,
  yellow_arrow,
  yellow_card_back,
} from '../assets';
import { CardType } from '../interfaces';
import { Color, bgColor } from '../constants';

export function getCardPropertiesByType(type: CardType, isDragging: boolean) {
  switch (type) {
    case CardType.All:
      return {
        arrows: (
          <div
            className="flex absolute left-0 top-0 -translate-y-[70px] w-full -translate-x-[20px] transition-opacity	duration-300"
            style={{ opacity: isDragging ? 1 : 0 }}
          >
            <img alt="yellow_arrow" className="w-[71px] h-[117px] -rotate-45" src={yellow_arrow} />
            <img alt="yellow_arrow" className="w-[71px] h-[117px] " src={yellow_arrow} />
            <img alt="yellow_arrow" className="w-[71px] h-[117px] rotate-45" src={yellow_arrow} />
          </div>
        ),
        backUrl: yellow_card_back,
        color: Color.YELLOW,
        bgColor: bgColor.YELLOW,
      };

    case CardType.Left:
      return {
        arrows: (
          <div
            className="flex absolute left-0 top-0 -translate-y-[70px] w-full transition-opacity duration-300"
            style={{ opacity: isDragging ? 1 : 0 }}
          >
            <img alt="blue_arrow" className="w-[71px] h-[117px] -rotate-45" src={blue_arrow} />
            <img alt="blue_arrow" className="w-[71px] h-[117px] " src={blue_arrow} />
          </div>
        ),
        backUrl: blue_card_back,
        color: Color.BLUE,
        bgColor: bgColor.BLUE,
      };

    case CardType.Right:
      return {
        arrows: (
          <div
            className="flex absolute left-0 top-0 -translate-y-[70px] w-full -translate-x-[20px] transition-opacity	duration-300"
            style={{ opacity: isDragging ? 1 : 0 }}
          >
            <img alt="green_arrow" className="w-[71px] h-[117px] " src={green_arrow} />
            <img alt="green_arrow" className="w-[71px] h-[117px] rotate-45" src={green_arrow} />
          </div>
        ),
        backUrl: green_card_back,
        color: Color.GREEN,
        bgColor: bgColor.GREEN,
      };

    case CardType.Straight:
      return {
        arrows: (
          <div
            className="flex absolute left-0 top-0 -translate-y-[70px] w-full -translate-x-[20px] transition-opacity	duration-300"
            style={{ opacity: isDragging ? 1 : 0 }}
          >
            <img alt="red_arrow" className="w-[71px] h-[117px] " src={red_arrow} />
          </div>
        ),
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
