import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { NotFound } from "pages/NotFound/ui/NotFound"
import { RouteProps } from "react-router-dom"

enum pages {
  ABOUT = "ABOUT",
  MAIN = "USERS",
  NOTFOUND = "NOTFOUND",
}

const pagesPaths: Record<pages, string> = {
	[pages.ABOUT]: "/about",
	[pages.MAIN]: "/",
	[pages.NOTFOUND]: "*",
}

export const router: Record<pages, RouteProps> = {
	[pages.ABOUT]: {
		path: pagesPaths.ABOUT,
		element: <AboutPage />,
	},
	[pages.MAIN]: {
		path: pagesPaths.USERS,
		element: <MainPage />,
	},
	[pages.NOTFOUND]: {
		path: pagesPaths.NOTFOUND,
		element: <NotFound />,
	},
}
