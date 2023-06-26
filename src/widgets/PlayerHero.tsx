import { usePlayerSelector } from '../store';
import { Hero } from '../ui';

const PlayerHero = () => {
  const playerName = usePlayerSelector().name;
  const playerHp = usePlayerSelector().hp;
  return <Hero hp={playerHp} name={playerName} />;
};

export default PlayerHero;
