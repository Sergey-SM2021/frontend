import { useTranslation } from "react-i18next"
import style from "./Main.module.scss"

const Main = () => {
	const { t } = useTranslation("mainPage")

	return <div className={style.main}>{t("main")}</div>
}

export default Main
