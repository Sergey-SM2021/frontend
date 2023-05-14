import { ButtonHTMLAttributes } from "react"
import { classnames } from "shared/utils/classnames"
import style from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
	const { className, ...restProps } = props

	return (
		<button
			{...restProps}
			className={classnames(style.button, {}, className && [className])}
		>
			{props.children}
		</button>
	)
}
