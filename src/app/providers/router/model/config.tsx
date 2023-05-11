import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";
import { RouteProps } from "react-router-dom";

enum pages {
  ABOUT = "ABOUT",
  MAIN = "USERS",
}

const pagesPaths: Record<pages, string> = {
  [pages.ABOUT]: "/about",
  [pages.MAIN]: "/",
};

export const router: Record<pages, RouteProps> = {
  [pages.ABOUT]: {
    path: pagesPaths.ABOUT,
    element: <AboutPage />,
  },
  [pages.MAIN]: {
    path: pagesPaths.USERS,
    element: <MainPage />,
  },
};
