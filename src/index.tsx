import { createRoot } from "react-dom/client";
import "./style/style.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { AboutPage } from "./pages/About/About.lazy";
import { UsersPage } from "./pages/Users/Users.lazy";
import { App } from "./App";
import { ThemeProvider } from "./theme/provider";

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
