import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { router } from "../model/config"

export const RouterProvider = () => {
	return (
		<Suspense>
			<Routes>
				{Object.values(router).map((r) => (
					<Route path={r.path} key={r.path} element={r.element} />
				))}
			</Routes>
		</Suspense>
	)
}
