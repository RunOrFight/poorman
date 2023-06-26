import { usePlayerSelector } from '../store';
import { Hero } from '../ui';
import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es';
import { usePrevious } from '../utils';

const PlayerHero = () => {
  const playerName = usePlayerSelector().name;
  const playerHp = usePlayerSelector().hp;
  const previousHp = usePrevious(playerHp);
  const animation = useRef(
    anime({
      targets: '.fade-hint',
      translateY: -50,
      opacity: {
        value: ['100%', '0%'],
        delay: 200,
      },
      easing: 'linear',
    })
  );
  useEffect(() => {
    animation.current.restart();
  }, [playerHp]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="fade-hint text-xl opacity-0 text-red-600">{playerHp - previousHp}</div>
      <Hero hp={playerHp} name={playerName} />
    </div>
  );
};

export default PlayerHero;
