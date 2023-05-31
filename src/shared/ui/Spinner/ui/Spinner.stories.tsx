import type { Meta, StoryObj } from "@storybook/react"
import "app/style/style.scss"
import { Spinner } from "./Spinner"

const DarkThemeDecorator = (Story: any) => (
	<div className="app dark">
		<Story />
	</div>
)

const PrimaryThemeDecorator = (Story: any) => (
	<div className="app default">
		<Story />
	</div>
)

const meta = {
	title: "shared/spinner",
	component: Spinner,
	tags: ["autodocs"],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>;

export const SpinnerBlack: Story = {
	args: {},
	decorators: [DarkThemeDecorator],
}

export const SpinnerDefault: Story = {
	args: {},
	decorators: [PrimaryThemeDecorator],
}