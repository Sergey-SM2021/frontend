import { useTheme } from "shared/hooks/useTheme"
import ThemeToggle from "shared/assets/theme.svg"
import { Button } from "shared/ui/Button"

export const ThemeSwitcher = () => {
	const { setTheme } = useTheme()

	return (
		<Button onClick={setTheme}>
			<ThemeToggle />
		</Button>
	)
}
