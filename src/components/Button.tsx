import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        py-2.5 px-5 bg-[#f0f0f0] rounded text-[#333] cursor-pointer text-lg
        transition-colors ease-in duration-200
       hover:bg-[#ccc] focus:shadow focus:outline-none active:bg-[#999] active:text-[#fff]`}
    >
      {children}
    </button>
  );
};

export default Button;
