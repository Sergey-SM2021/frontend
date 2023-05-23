import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import "app/style/style.scss"

import { Link } from "./Link"
import { BrowserRouter } from "react-router-dom"

const darkTheme = (Story: StoryFn) => (
	<div className="app dark">
		<Story />
	</div>
)

const defaultTheme = (Story: StoryFn) => (
	<div className="app default">
		<Story />
	</div>
)

const router = (Story: StoryFn) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
)

const meta = {
	title: "Shared/Link",
	component: Link,
	tags: ["autodocs"],
	args: {
		to: "/",
		children: "link",
	},
	decorators: [router]
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [defaultTheme],
}

export const Dark: Story = {
	decorators: [darkTheme],
}
