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
        animation: (isEnemy: boolean) => {
          return {
            keyframes: [
              { translateY: isEnemy ? 100 : -100, translateX: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, translateX: isEnemy ? -100 : 100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
            ],
          };
        },
      };

    case CardType.Left:
      return {
        arrows: (
          <ArrowSet color={Color.BLUE} bgColor={BgColor.BLUE} opacity={isDragging} center left />
        ),
        backUrl: blue_card_back,
        color: Color.BLUE,
        bgColor: BgColor.BLUE,
        animation: (isEnemy: boolean) => {
          return {
            keyframes: [
              { translateY: isEnemy ? 100 : -100, translateX: -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
            ],
          };
        },
      };

    case CardType.Right:
      return {
        arrows: (
          <ArrowSet color={Color.GREEN} bgColor={BgColor.GREEN} opacity={isDragging} center right />
        ),
        backUrl: green_card_back,
        color: Color.GREEN,
        bgColor: BgColor.GREEN,
        animation: (isEnemy: boolean) => {
          return {
            keyframes: [
              { translateY: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, translateX: 100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
            ],
          };
        },
      };

    case CardType.Straight:
      return {
        arrows: <ArrowSet color={Color.RED} bgColor={BgColor.RED} opacity={isDragging} center />,
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: BgColor.RED,
        animation: (isEnemy: boolean) => {
          return {
            keyframes: [
              { translateY: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
            ],
          };
        },
      };

    default:
      return {
        backUrl: red_card_back,
        color: Color.RED,
        bgColor: BgColor.RED,
        animation: (isEnemy: boolean) => {
          return {
            keyframes: [
              { translateY: isEnemy ? 100 : -100, translateX: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
              { translateY: isEnemy ? 100 : -100, translateX: isEnemy ? -100 : 100, scale: 1.2 },
              { translateY: 0, translateX: 0, scale: 1 },
            ],
          };
        },
      };
  }
}
