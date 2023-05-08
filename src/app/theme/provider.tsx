import { FC, PropsWithChildren, useState } from "react";
import { ThemeContext } from "./context";

interface IApp {}

export enum TTheme {
  default = "default",
  dark = "dark",
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(TTheme.default);

  const handlerChangeTheme = () => {
    setTheme((prev) =>
      prev === TTheme.default ? TTheme.dark : TTheme.default
    );
  };

  return (
    <ThemeContext.Provider value={{ setTheme: handlerChangeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
