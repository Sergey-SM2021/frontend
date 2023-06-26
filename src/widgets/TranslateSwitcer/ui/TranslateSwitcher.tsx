import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button"
import { ThemeEnum } from "shared/ui/Button/ui/Button"

interface TranslateSwitcherProps {
  short?: boolean;
}

export const TranslateSwitcher = ({ short }: TranslateSwitcherProps) => {
	const { i18n, t } = useTranslation("global")

	const changeLang = () => {
		i18n.language === "Русский"
			? i18n.changeLanguage("English")
			: i18n.changeLanguage("Русский")
	}

	return (
		<Button theme={ThemeEnum.EMPTY} onClick={changeLang}>
			{short ? t("language") : t("language-short")}
		</Button>
	)
}
