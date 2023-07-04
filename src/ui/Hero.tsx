import { FC, memo } from 'react';
import { hero } from '../assets';
import { useEffect, useMemo, useRef } from 'react';
import anime from 'animejs/lib/anime.es';
import { usePrevious } from '../utils';

interface IHeroProps {
  hp: number;
  name: string;
}

const Hero: FC<IHeroProps> = memo(({ hp, name }) => {
  const previousHp = usePrevious(hp);
  const animation = useRef(
    anime({
      targets: '.fade-hint',
      top: ['100px', '0'],
      fontSize: ['2rem', '4rem'],
      opacity: {
        value: ['100%', '0%'],
        delay: 200,
      },
      easing: 'linear',
    })
  );
  useEffect(() => {
    animation.current.restart();
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] flex flex-col text-white text-4xl justify-center items-center">
      <span className="fade-hint opacity-0 text-red-600 absolute z-10 ">
        {hp - previousHp > 0 ? null : hp - previousHp}
      </span>
      <span className="text-2xl">{name}</span>
      <span>{hp}</span>
      <img src={hero} alt="hero" className=" object-cover absolute top-0 left-0 w-full h-full" />
    </div>
  );
});

export default Hero;
