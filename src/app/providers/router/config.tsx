import { App } from "app/App";
import { AboutPage } from "pages/About";
import { UsersPage } from "pages/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
