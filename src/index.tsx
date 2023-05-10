import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/theme/provider";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "app/providers/router/ui/RouterProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </BrowserRouter>
);
