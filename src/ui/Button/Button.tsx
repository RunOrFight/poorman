import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.css";
import { button } from "../../assets";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      style={{ backgroundImage: `url(${button})` }}
      {...props}
      className={classes.button}
    >
      {children}
    </button>
  );
};

export default Button;
