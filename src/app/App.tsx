import { useTheme } from "shared/hooks/useTheme";
import "./style/style.scss";

interface IApp {}

export const App = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      app comonetnt
      <button onClick={setTheme}>switch theme</button>
    </div>
  );
};
