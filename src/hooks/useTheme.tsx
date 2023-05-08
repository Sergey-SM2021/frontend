import { useContext } from "react";
import { ThemeContext } from "../theme/context";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};
