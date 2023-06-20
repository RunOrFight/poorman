import {InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="p-2.5 border rounded text-lg transition-colors ease duration-300 hover:border-[#999] focus:border-[#999]"
      type="text"
    />
  );
});

export default Input;
