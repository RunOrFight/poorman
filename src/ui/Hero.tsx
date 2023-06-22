import { FC } from "react";

interface IHeroProps {
  hp: number;
  name: string;
}

const Hero: FC<IHeroProps> = ({ hp, name }) => {
  return (
    <div className="relative w-[200px] h-[200px] flex flex-col text-white text-xl justify-center items-center">
      <span>{name}</span>
      <span>{hp}</span>
      <img
        src="src/assets/hero.png"
        alt="hero"
        className=" object-cover absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default Hero;
