import { render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"

describe("sidebar", () => {
	it("render", () => {
		render(<Sidebar />)
		expect(screen.getByText("toggle")).toBeInTheDocument()
	})
})
