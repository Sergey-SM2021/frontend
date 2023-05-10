import { App } from "app/App";
import { AboutPage } from "pages/About";
import { UsersPage } from "pages/Users";
import { RouteProps } from "react-router-dom";

enum pages {
  ABOUT = "ABOUT",
  USERS = "USERS",
  APP = "APP",
}

const pagesPaths: Record<pages, string> = {
  [pages.ABOUT]: "/about",
  [pages.USERS]: "/users",
  [pages.APP]: "/",
};

export const router: Record<pages, RouteProps> = {
  [pages.ABOUT]: {
    path: pagesPaths.ABOUT,
    element: <AboutPage />,
  },
  [pages.USERS]: {
    path: pagesPaths.USERS,
    element: <UsersPage />,
  },
  [pages.APP]: {
    path: pagesPaths.APP,
    element: <App />,
  },
};
