import { useContext } from "react";
import { ThemeContext } from "app/theme/context";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};
