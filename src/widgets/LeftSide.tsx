import { PlayerHero } from '.';
import { Progress } from '../ui';

const LeftSide = () => {
  return (
    <div className="w-fit h-full flex flex-col justify-end gap-[62px] items-center py-[35px]">
      <Progress />
      <PlayerHero />
    </div>
  );
};

export default LeftSide;
