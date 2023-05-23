import { useTheme } from "shared/hooks/useTheme"
import ThemeToggle from "shared/assets/theme.svg"
import { Button } from "shared/ui/Button"
import { ThemeEnum } from "shared/ui/Button/ui/Button"

export const ThemeSwitcher = () => {
	const { setTheme } = useTheme()

	return (
		<Button theme={ThemeEnum.EMPTY} onClick={setTheme}>
			<ThemeToggle />
		</Button>
	)
}
