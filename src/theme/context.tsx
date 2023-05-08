import { createContext } from "react";
import { TTheme } from "./provider";

interface ThemeContext {
  theme: TTheme;
  setTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: TTheme.default,
  setTheme: () => {},
});
