import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
	test("render", () => {
		render(<Button>кнопка</Button>)
		expect(screen.getByText("кнопка")).toBeInTheDocument()
	})
})
