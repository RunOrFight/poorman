import { FC, forwardRef, memo } from 'react';
import classes from './Card.module.css';
import { IEnemyCardHidden, IEnemyCardOpen, IPlayerCard } from '../../interfaces';

import { DamageIcon, MpIcon, HpIcon } from '../';
import { getCardPropertiesByType } from '../../utils';
import clsx from 'clsx';
import { Color } from '../../constants';

interface ICardPropertiesProps {
  card: IPlayerCard;
  color: (typeof Color)[keyof typeof Color];
}
const CardProperties: FC<ICardPropertiesProps> = ({ card, color }) => {
  return (
    <>
      <div className={'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'}>
        <MpIcon value={card.manacost} color={color} />
      </div>
      <div className={'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2'}>
        <DamageIcon value={card.damage} color={color} />
      </div>
      <div className={'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2'}>
        <HpIcon value={card.hp} color={color} />
      </div>
    </>
  );
};

const Card = memo(
  forwardRef<HTMLDivElement, IPlayerCard | IEnemyCardHidden | IEnemyCardOpen>((card, ref) => {
    const { backUrl, color } = getCardPropertiesByType(card.type);
    const isPlayerCard = 'hp' in card && 'damage' in card && 'manacost' in card;

    const dataForColor = {
      border: `2px solid ${color}`,
      backgroundColor: 'rgba(78, 71, 6, 1)', //color,
    };

    return isPlayerCard ? (
      <div
        ref={ref}
        className={clsx(classes.card, {
          [classes.cardClosed]: false, // todo sasha для возможности переворачивания
        })}
        id={`card_${card.id}`}
      >
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
