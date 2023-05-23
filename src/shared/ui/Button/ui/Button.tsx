import { ButtonHTMLAttributes } from "react"
import { classnames } from "shared/utils/classnames"
import style from "./Button.module.scss"

export enum ThemeEnum {
  EMPTY = "empty",
  OUTLINE = "outline",
  PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeEnum;
}

export const Button = (props: ButtonProps) => {
	const { className, theme, ...restProps } = props

	return (
		<button
			{...restProps}
			className={classnames(style.button, {  }, [className, style[theme]])}
		>
			{props.children}
		</button>
	)
}
