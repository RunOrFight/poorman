import { FC, forwardRef, memo, useEffect, useMemo, useRef } from 'react';
import classes from './Card.module.css';
import { IEnemyCardHidden, IEnemyCardOpen, IPlayerCard } from '../../interfaces';

import { DamageIcon, MpIcon, HpIcon } from '../';
import { getCardPropertiesByType, usePrevious } from '../../utils';
import { Color } from '../../constants';
import anime from 'animejs';
import clsx from 'clsx';

interface ICardPropertiesProps {
  card: IPlayerCard;
  color: (typeof Color)[keyof typeof Color];
}
const CardProperties: FC<ICardPropertiesProps> = ({ card, color }) => {
  const previousHp = usePrevious(card.hp);
  const diff = useMemo(() => card.hp - previousHp, [card.hp, previousHp]);
  const animation = useRef(
    anime({
      targets: `#card_${card.id} .hp-text`,
      color: [Color.RED, '#ffffff'],
      fontSize: [{ value: '2rem' }, { value: '1.25rem' }],
      easing: 'easeInCubic',
      duration: 300,
    })
  );

  useEffect(() => {
    if (diff > 0) {
      animation.current.restart();
    }
  }, [diff]);

  return (
    <>
      <div className={'absolute bottom-[6px] left-[20px] -translate-x-1/2 translate-y-1/2'}>
        <DamageIcon value={card.damage} color={color} />
      </div>
      <div className={'absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2'}>
        <MpIcon value={card.manacost} color={color} />
      </div>
      <div className={'absolute bottom-[2px] right-[20px] translate-x-1/2 translate-y-1/2'}>
        <HpIcon value={card.hp} color={color} />
      </div>
    </>
  );
};

const Card = memo(
  forwardRef<HTMLDivElement, IPlayerCard | IEnemyCardHidden | IEnemyCardOpen>((card, ref) => {
    const { backUrl, color, bgColor } = getCardPropertiesByType(card.type, false);
    const isPlayerCard = 'hp' in card && 'damage' in card && 'manacost' in card;

    const dataForColor = {
      border: `2px solid ${color}`,
      backgroundColor: bgColor,
    };

    return isPlayerCard ? (
      <div ref={ref} className={clsx(classes.card, 'card')} id={`card_${card.id}`}>
        <div className={classes.front} style={dataForColor}>
          <div
            className={classes.img}
            style={{
              backgroundImage: `url(${card.imageUrl})`,
              ...dataForColor,
            }}
          >
            <CardProperties card={card} color={color} />
          </div>
          <div className={classes.name}>{card.name}</div>
        </div>

        <div className={classes.back} style={{ backgroundImage: `url(${backUrl})` }} />
      </div>
    ) : (
      <div
        id={`card_${card.id}`}
        className={classes.card}
        style={{ backgroundImage: `url(${backUrl})` }}
      ></div>
    );
  })
);

export default Card;
