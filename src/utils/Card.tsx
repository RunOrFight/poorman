import { blue_card_back, green_card_back, red_card_back, yellow_card_back } from '../assets';
import { CardType } from '../interfaces';
import { Color, BgColor } from '../constants';
import ArrowSet from '../ui/ArrowSet/ArrowSet';

export function getCardPropertiesByType(type: CardType, isDragging: boolean) {
  switch (type) {
    case CardType.All:
      return {
        arrows: (
          <ArrowSet
            color={Color.YELLOW}
            bgColor={BgColor.YELLOW}
            opacity={isDragging}
            left
            center
            right
          />
        ),
        backUrl: yellow_card_back,
        color: Color.YELLOW,
        bgColor: BgColor.YELLOW,
      };

    case CardType.Left:
      return {
        arrows: (
          <ArrowSet color={Color.BLUE} bgColor={BgColor.BLUE} opacity={isDragging} center left />
        ),
        backUrl: blue_card_back,
        color: Color.BLUE,
        bgColor: BgColor.BLUE,
      };

    case CardType.Right:
      return {
        arrows: (
          <ArrowSet color={Color.GREEN} bgColor={BgColor.GREEN} opacity={isDragging} center right />
        ),
        backUrl: green_card_back,
        color: Color.GREEN,
        bgColor: BgColor.GREEN,
      };

    case CardType.Straight:
      return {
        arrows: <ArrowSet color={Color.RED} bgColor={BgColor.RED} opacity={isDragging} center />,
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: BgColor.RED,
      };

    default:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: BgColor.RED,
      };
  }
}
