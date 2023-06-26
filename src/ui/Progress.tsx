import { piece, progress } from '../assets';
import { usePlayerSelector } from '../store';

const Progress = () => {
  const manaCurrent = usePlayerSelector().manaCurrent;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-2xl">{manaCurrent}</div>
      <div
        style={{ backgroundImage: `url(${progress})` }}
        className="w-[70px] bg-center relative flex justify-end flex-col  bg-contain h-[492px] bg-no-repeat px-[2px]"
      >
        {new Array(manaCurrent).fill(null).map((_, index) => {
          const bottom = `${12 + index * 62.5}px`;
          const zIndex = `${50 - index}`;
          return (
            <img
              alt="manapiece"
              key={bottom}
              style={{ bottom, zIndex }}
              src={piece}
              className={`object-contain w-[66px] absolute ${zIndex}`}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
