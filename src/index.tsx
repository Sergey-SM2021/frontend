import { createRoot } from "react-dom/client";
import { ThemeProvider } from "app/providers/theme";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
