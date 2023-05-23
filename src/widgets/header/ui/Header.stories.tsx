import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import "app/style/style.scss"
import {Header} from "./Header"
import { BrowserRouter } from "react-router-dom"

const router = (Story: StoryFn) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
)

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

const meta = {
	title: "wiget/Header",
	component: Header,
	tags: ["autodocs"],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
	args: {
	},
	decorators: [darkTheme, router],
}

export const DarkHeader: Story = {
	args: {
	},
	decorators: [defaultTheme, router],
}