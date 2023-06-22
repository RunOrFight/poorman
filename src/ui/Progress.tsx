import { piece, progress } from "../assets";
import { usePlayerSelector } from "../store";

const Progress = () => {
  const mana = usePlayerSelector().mana;
  return (
    <div
      style={{ backgroundImage: `url(${progress})` }}
      className="w-[70px] bg-center relative flex justify-end flex-col  bg-contain h-[492px] bg-no-repeat px-[2px]"
    >
      {new Array(mana).fill(null).map((i, index) => {
        const bottom = `${12 + index * 24}px`;
        const zIndex = `${50 - index}`;
        return (
          <img
              key={bottom}
            style={{ bottom, zIndex }}
            src={piece}
            className={`object-contain w-[66px] absolute ${zIndex}`}
          ></img>
        );
      })}
    </div>
  );
};

export default Progress;
