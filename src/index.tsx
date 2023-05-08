import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { AboutPage } from "./pages/About/ui/About.lazy";
import { UsersPage } from "./pages/Users/ui/Users.lazy";
import { App } from "./app/App";
import { ThemeProvider } from "./app/theme/provider";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>
);
