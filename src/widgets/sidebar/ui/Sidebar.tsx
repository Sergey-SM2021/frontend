import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import style from "./Sidebar.module.scss"
import { useState } from "react"
import { classnames } from "shared/utils/classnames"
import { TranslateSwitcher } from "widgets/TranslateSwitcer"

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const handlerToggle = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<div
			className={classnames(
				style.sidebar,
				{ [style.sidebar__open]: isOpen },
				[]
			)}
		>
      lol
			<div className={style.sidebar__control}>
				<button onClick={handlerToggle}>toggle</button>
			</div>
			<div className={style.sidebar__settings}>
				<ThemeSwitcher />
				<TranslateSwitcher />
			</div>
		</div>
	)
}
