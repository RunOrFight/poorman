import { piece } from "../assets";

const mana = 16;

const Progress = () => {
  return (
    <div className="w-[70px] bg-center relative flex justify-end flex-col bg-[url(src/assets/progress.png)] bg-contain h-[492px] bg-no-repeat px-[2px]">
      {new Array(mana).fill(null).map((i, index) => {
        const bottom = `${12 + index * 24}px`;
        const zIndex = `${50 - index}`;
        return (
          <img
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
