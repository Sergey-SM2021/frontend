import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import "app/style/style.scss"
import MainPage from "./Main"

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
	title: "pages/MainPage",
	component: MainPage,
	tags: ["autodocs"],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;

export const MainPageDefault: Story = {
	args: {},
	decorators: [defaultTheme],
}

export const MainPageDark: Story = {
	args: {},
	decorators: [darkTheme],
}
