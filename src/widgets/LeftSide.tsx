import { PlayerHero } from '.';
import { Progress } from '../ui';

const LeftSide = () => {
  return (
    <div className="w-fit h-full flex flex-col justify-end items-center">
      <Progress />
      <PlayerHero />
    </div>
  );
};

export default LeftSide;
