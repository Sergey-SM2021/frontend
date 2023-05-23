import type { Meta, StoryObj } from "@storybook/react"

import { Button, ThemeEnum } from "./Button"
import { styleDecorator } from "app/storybook/decorators/styleDecorator"

const meta = {
	title: "Shared/Button",
	component: Button,
	tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: ThemeEnum.PRIMARY,
		children: "кнопка",
	},
	decorators: [
		styleDecorator,
		(Story) => (
			<div className="app">
				<Story />
			</div>
		),
	],
}

export const Outline: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: "кнопка",
	},
}

export const Empty: Story = {
	args: {
		theme: ThemeEnum.EMPTY,
		children: "кнопка",
	},
}
