import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="p-2.5 border rounded text-lg transition-colors ease duration-300 hover:border-[#999] focus:border-[#999]"
      type="text"
    />
  );
};

export default Input;
