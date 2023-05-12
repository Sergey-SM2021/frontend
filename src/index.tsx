import { createRoot } from "react-dom/client";
import { ThemeProvider } from "app/providers/theme";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";

import "./app/translate/i18n";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
