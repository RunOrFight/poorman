import { EndTurnButton, EnemyHero } from '.';

const RightSide = () => {
  return (
    <div className="w-1/4 h-full flex flex-col justify-start items-center right-side">
      <EnemyHero />
      <div className="h-full flex items-center">
        <EndTurnButton />
      </div>
    </div>
  );
};

export default RightSide;
