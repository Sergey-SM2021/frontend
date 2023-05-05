import { createRoot } from "react-dom/client";
import React from "react";
import "./style.scss";

function App() {
  return <div className="main">Hello World</div>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
