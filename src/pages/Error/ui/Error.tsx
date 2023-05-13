import { Button } from "shared/ui/Button"
import style from "./Error.module.scss"

export const Error = () => {
	const handlerClick = () => {
		location.reload()
	}
	return <div className={style.Error}>
		<div>{"Error"}</div>
		<Button onClick={handlerClick}>reload</Button>
	</div>
}
