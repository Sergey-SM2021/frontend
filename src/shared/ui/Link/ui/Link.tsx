import { LinkProps } from "react-router-dom"
import { Link as ReactRouterLink } from "react-router-dom"
import { classnames } from "shared/utils/classnames"
import style from "./Link.module.scss"

enum Thems {
  default = "default",
  underline = "underline",
}

interface ILink extends LinkProps {
  theme?: Thems;
}

export const Link = (props: ILink) => {
	const { to, className, theme = Thems.default, children } = props
	return (
		<ReactRouterLink
			to={to}
			className={classnames(className, {}, [style[theme]])}
		>
			{children}
		</ReactRouterLink>
	)
}
