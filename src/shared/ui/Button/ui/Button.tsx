import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  );
};
