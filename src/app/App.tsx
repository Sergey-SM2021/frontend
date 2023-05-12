import { useTheme } from "shared/hooks/useTheme";
import "./style/style.scss";
import { classnames } from "shared/utils/classnames";
import { Header } from "widgets/header";
import { RouterProvider } from "./providers/router";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Header />
      <div className="layout">
        <Sidebar />
        <RouterProvider />
      </div>
    </div>
  );
};
