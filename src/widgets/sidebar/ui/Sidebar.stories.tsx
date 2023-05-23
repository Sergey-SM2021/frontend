import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import "app/style/style.scss"
import {Sidebar} from "./Sidebar"

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
	title: "wiget/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;

export const DefaultSidebar: Story = {
	args: {
	},
	decorators: [darkTheme],
}

export const DarkSidebar: Story = {
	args: {
	},
	decorators: [defaultTheme],
}