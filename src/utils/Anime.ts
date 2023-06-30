import { ICardAttack } from '../interfaces';
import anime from 'animejs/lib/anime.es';
import { AnimeParams } from 'animejs';

export async function playAttackAnimation(data: ICardAttack) {
  await new Promise((complete) => {
    const flip = anime.timeline({
      easing: 'easeInOutSine',
    });
    flip
      .add({
        targets: `.enemy #card_${data.attackingCard.id} [class*="back"]`,
        keyframes: [{ rotateY: 0 }, { rotateY: -180 }],
        duration: 600,
      })
      .add(
        {
          targets: `.enemy #card_${data.attackingCard.id} [class*="front"]`,
          keyframes: [{ rotateY: 180 }, { rotateY: 0 }],
          duration: 600,
        },
        0
      )
      .add({
        targets: `.enemy #card_${data.attackingCard.id}`,
        translateY: [
          { value: -100, duration: 500 },
          { value: 50, duration: 200 },
          { value: 0, duration: 500 },
        ],
        scale: [
          { value: 1.2, duration: 500 },
          { value: 1, duration: 200 },
        ],
        easing: 'easeOutElastic(1, .8)',
      });

    anime({
      targets: `.player #card_${data.attackingCard.id}`,
      translateY: [
        { value: 100, duration: 500 },
        { value: -50, duration: 200 },
        { value: 0, duration: 500 },
      ],
      scale: [
        { value: 1.2, duration: 500 },
        { value: 1, duration: 200 },
      ],
      easing: 'easeOutElastic(1, .8)',
      complete,
    });
  });
}

export const cardAttackAnimation = ({
  isEnemy,
  cardId,
}: {
  isEnemy: boolean;
  cardId: ICardAttack['attackingCard']['id'];
}) => ({
  targets: `#${cardId}`,
  translateY: [
    { value: isEnemy ? -100 : 100, duration: 500 },
    { value: isEnemy ? 50 : -50, duration: 200 },
    { value: 0, duration: 500 },
  ],
  scale: [
    { value: 1.2, duration: 500 },
    { value: 1, duration: 200 },
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
