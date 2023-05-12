import { useContext } from "react"
import { ThemeContext } from "app/providers/theme"

export const useTheme = () => {
	const { setTheme, theme } = useContext(ThemeContext)
	return { setTheme, theme }
}
