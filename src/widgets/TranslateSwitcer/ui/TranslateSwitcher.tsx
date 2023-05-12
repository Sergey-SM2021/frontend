import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button"

export const TranslateSwitcher = () => {
	const { i18n } = useTranslation()

	const changeLang = () => {
		i18n.language === "Русский"
			? i18n.changeLanguage("English")
			: i18n.changeLanguage("Русский")
	}

	return <Button onClick={changeLang}>{i18n.language}</Button>
}
