import { useTheme } from "shared/hooks/useTheme";
import "./style/style.scss";
import { classnames } from "shared/utils/classnames";
import { Header } from "widgets/header";

interface IApp {}

export const App = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Header />
      <button onClick={setTheme}>switch theme</button>
    </div>
  );
};
