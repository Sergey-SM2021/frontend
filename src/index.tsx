import { createRoot } from "react-dom/client";
import "./style.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { AboutPage } from "./pages/About/About.lazy";
import { UsersPage } from "./pages/Users/Users.lazy";

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
    element: <div>hellow word</div>,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);
