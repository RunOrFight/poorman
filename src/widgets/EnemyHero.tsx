import { useEnemySelector } from '../store';
import { Hero } from '../ui';

const EnemyHero = () => {
  const enemyName = useEnemySelector().name;
  const enemyHp = useEnemySelector().hp;
  return <Hero hp={enemyHp} name={enemyName} />;
};

export default EnemyHero;
