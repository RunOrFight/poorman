import { usePlayerSelector } from '../store';
import { Hero } from '../ui';

const PlayerHero = () => {
  const playerName = usePlayerSelector().name;
  const playerHp = usePlayerSelector().hp;

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Hero hp={playerHp} name={playerName} />
    </div>
  );
};

export default PlayerHero;
