import { FC, PropsWithChildren, useState } from "react";
import { ThemeContext } from "./context";
import { TTheme } from "./const";

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
