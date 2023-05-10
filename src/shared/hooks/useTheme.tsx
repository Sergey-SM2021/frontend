import { useContext } from "react";
import { ThemeContext } from "app/providers/theme/context";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};
