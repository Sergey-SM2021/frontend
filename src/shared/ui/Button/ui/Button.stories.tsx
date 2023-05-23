import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import "app/style/style.scss"

import { Button, ThemeEnum } from "./Button"

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
	title: "Shared/Button",
	component: Button,
	tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimaryDefault: Story = {
	args: {
		theme: ThemeEnum.PRIMARY,
		children: "кнопка",
	},
	decorators: [defaultTheme],
}

export const PrimaryDark: Story = {
	args: {
		theme: ThemeEnum.PRIMARY,
		children: "кнопка",
	},
	decorators: [darkTheme],
}

export const OutlineDefault: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: "кнопка",
	},
	decorators: [defaultTheme],
}

export const OutlineDark: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: "кнопка",
	},
	decorators: [darkTheme],
}

export const EmptyDefault: Story = {
	args: {
		theme: ThemeEnum.EMPTY,
		children: "кнопка",
	},
	decorators: [defaultTheme],
}

export const EmptyDark: Story = {
	args: {
		theme: ThemeEnum.EMPTY,
		children: "кнопка",
	},
	decorators: [darkTheme],
}
