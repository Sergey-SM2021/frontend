import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "./app/theme/provider";
import { router } from "app/providers/router/config";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>
);
