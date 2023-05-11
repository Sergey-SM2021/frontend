import { useTheme } from "shared/hooks/useTheme";
import "./style/style.scss";
import { classnames } from "shared/utils/classnames";
import { Header } from "widgets/header";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface IApp {}

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Header />
      <ThemeSwitcher />
    </div>
  );
};
