import { useTranslation } from "react-i18next"
import style from "./Main.module.scss"
import { Button } from "shared/ui/Button"
import { ThemeEnum } from "shared/ui/Button/ui/Button"

const Main = () => {
	const { t } = useTranslation("mainPage")

	return <div className={style.main}>{t("main")}<Button theme={ThemeEnum.PRIMARY}>Кнопочка</Button></div>
}

export default Main
