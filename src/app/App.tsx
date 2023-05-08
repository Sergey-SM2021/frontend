import { useTheme } from "shared/hooks/useTheme";
import "./style/style.scss";
import { classnames } from "shared/utils/classnames";

interface IApp {}

export const App = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={classnames("app", { }, [theme])}>
      app comonetnt
      <button onClick={setTheme}>switch theme</button>
    </div>
  );
};
