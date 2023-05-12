import { createContext } from "react"
import { TTheme } from "./const"

interface ThemeContext {
  theme: TTheme;
  setTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
	theme: TTheme.default,
})
