import { ICardAttack } from '../interfaces';
import anime from 'animejs/lib/anime.es';
import { AnimeParams } from 'animejs';

export const cardAttackAnimation = ({
  isEnemy,
  cardId,
}: {
  isEnemy: boolean;
  cardId: ICardAttack['attackingCard']['id'];
}) => ({
  targets: `#card_${cardId}`,
  translateY: [
    { value: isEnemy ? -100 : 100, duration: 400 },
    { value: isEnemy ? 50 : -50, duration: 160 },
    { value: 0, duration: 500 },
  ],
  scale: [
    { value: 1.2, duration: 400 },
    { value: 1, duration: 160 },
  ],
  easing: 'easeOutElastic(1, .8)',
});

export const cardGetDamageAnimation = ({
  isEnemy,
  cardId,
}: {
  isEnemy: boolean;
  cardId: ICardAttack['attackingCard']['id'];
}): AnimeParams => ({
  targets: `#${cardId} .hp`,
  color: ['rgb(112,16,16)', 'rgb(0,0,0)'],
  fontSize: ['24px', '12px'],
});

export const animePromise = (params: AnimeParams) =>
  new Promise((complete) => {
    anime({ ...params, complete });
  });
