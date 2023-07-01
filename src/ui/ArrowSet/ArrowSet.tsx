import { FC } from 'react';
import clsx from 'clsx';

import ArrowIcon from '../ArrowIcon';

import styled from './ArrowSet.module.pcss';

interface IArrowIcon {
  opacity: boolean;
  color: string;
  bgColor: string;
  left?: boolean;
  center?: boolean;
  right?: boolean;
}

const ArrowSet: FC<IArrowIcon> = ({ color, bgColor, left, center, right, opacity }) => {
  return (
    <div
      className={clsx(styled.container, {
        [styled.opacity]: opacity,
      })}
    >
      <ArrowIcon
        className={clsx(styled.item, styled.left, {
          [styled.hidden]: !left,
        })}
        bgColor={bgColor}
        color={color}
      />
      <ArrowIcon
        className={clsx(styled.item, styled.center, {
          [styled.hidden]: !center,
        })}
        bgColor={bgColor}
        color={color}
      />
      <ArrowIcon
        className={clsx(styled.item, styled.right, {
          [styled.hidden]: !right,
        })}
        bgColor={bgColor}
        color={color}
      />
    </div>
  );
};

export default ArrowSet;
