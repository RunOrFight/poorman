import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

interface IWindowProps extends PropsWithChildren {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Window: FC<IWindowProps> = ({ isVisible, setIsVisible, children }) => {
  return (
    isVisible && (
      <>
        <div className="absolute w-screen h-screen bg-purple opacity-75 top-0 left-0"></div>
        <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center flex-col gap-5">
          <div className="h-fit w-fit flex items-end flex-col gap-5 min-h-[1px] max-w-[80%] max-h-[80%]">
            <div
              className="rounded-md bg-white h-10 w-10 text-center cursor-pointer"
              onClick={() => setIsVisible(false)}
            >
              <span className="leading-10 ">&times;</span>
            </div>
            <div className="bg-white px-16 py-12 w-full h-full min-h-[1px] rounded-[30px] ">
              {children}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Window;
