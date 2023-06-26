import { EndTurnButton, EnemyHero } from '.';

const RightSide = () => {
  return (
    <div className="w-1/4 h-full flex flex-col py-[35px] justify-start items-center">
      <EnemyHero />
      <div className="h-full flex items-center">
        <EndTurnButton />
      </div>
    </div>
  );
};

export default RightSide;
