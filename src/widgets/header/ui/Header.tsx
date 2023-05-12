import { Link } from "shared/ui/Link"
import style from "./Header.module.scss"

export const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.links}>
				<Link to={"/"}>main</Link>
				<Link to={"/about"}>about</Link>
			</div>
		</div>
	)
}
