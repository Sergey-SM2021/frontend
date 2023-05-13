import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { router } from "../model/config"
import { Spinner } from "shared/ui/Spinner"

export const RouterProvider = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				{Object.values(router).map((r) => (
					<Route path={r.path} key={r.path} element={r.element} />
				))}
			</Routes>
		</Suspense>
	)
}
