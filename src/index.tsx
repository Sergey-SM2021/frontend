import { createRoot } from "react-dom/client";
import { App } from "./App/App";
import "./style.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <App />
  </div>
);
