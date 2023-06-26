import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import style from "./Sidebar.module.scss"
import { useState } from "react"
import { classnames } from "shared/utils/classnames"
import { TranslateSwitcher } from "widgets/TranslateSwitcer"
import { Button } from "shared/ui/Button"
import { ThemeEnum, sizeEnum } from "shared/ui/Button/ui/Button"
import { Link } from "shared/ui/Link"
import { pagesPaths } from "app/providers/router/model/config"

import Home from "../../assets/home.svg"
import About from "../../assets/about.svg"
import { useTranslation } from "react-i18next"

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)
	const {t, i18n} = useTranslation("sidebar")

	const handlerToggle = () => {
		setIsOpen((prev) => !prev)
	}

	const links = [
		{ path: pagesPaths.MAIN, icon: <Home />, text: t("home") },
		{ path: pagesPaths.ABOUT, icon: <About />, text: t("about") },
	]

	return (
		<div
			className={classnames(
				style.sidebar,
				{ [style.sidebar__open]: isOpen },
				[]
			)}
		>
			<div className={style.items}>
				{links.map((el) => (
					<Link to={el.path} key={el.path} className={style.link}>
						<span className={style.icon}>{el.icon}</span>
						{isOpen ? <span>{el.text}</span> : null}
					</Link>
				))}
			</div>
			<div className={style.sidebar__control}>
				<Button
					theme={ThemeEnum.BACKGROUND_INVERTED}
					square
					size={sizeEnum.M}
					onClick={handlerToggle}
				>
					{isOpen ? ">" : "<"}
				</Button>
			</div>
			<div className={style.sidebar__settings}>
				<TranslateSwitcher short={isOpen} />
				<ThemeSwitcher />
			</div>
		</div>
	)
}
