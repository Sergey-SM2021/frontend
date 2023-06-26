import { ButtonHTMLAttributes } from "react"
import { classnames } from "shared/utils/classnames"
import style from "./Button.module.scss"

export enum ThemeEnum {
  EMPTY = "empty",
  OUTLINE = "outline",
  PRIMARY = "primary",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background__inverted",
}

export enum sizeEnum {
	M = "M",
	L = "L",
	XL = "XL"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeEnum;
  square?: boolean;
  size?: sizeEnum;
}

export const Button = (props: ButtonProps) => {
	const { className, theme, square, size, ...restProps } = props

	return (
		<button
			{...restProps}
			className={classnames(style.button, {}, [
				className,
				style[theme],
				square && style["square"],
				size && style[size],
			])}
		>
			{props.children}
		</button>
	)
}
