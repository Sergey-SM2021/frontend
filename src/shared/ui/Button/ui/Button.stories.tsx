import type { Meta, StoryObj } from "@storybook/react"
import "../../../../app/style/style.scss"

import { Button, ThemeEnum } from "./Button"

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
	decorators: [
		(Story) => (
			<div className="app default">
				<Story />
			</div>
		),
	],
}

export const PrimaryDark: Story = {
	args: {
		theme: ThemeEnum.PRIMARY,
		children: "кнопка",
	},
	decorators: [
		(Story) => (
			<div className="app dark">
				<Story />
			</div>
		),
	],
}

export const OutlineDefault: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: "кнопка",
	},
	decorators: [
		(Story) => (
			<div className="app default">
				<Story />
			</div>
		),
	],
}

export const OutlineDark: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: "кнопка",
	},
	decorators: [
		(Story) => (
			<div className="app dark">
				<Story />
			</div>
		),
	],
}

export const EmptyDefault: Story = {
	args: {
		theme: ThemeEnum.EMPTY,
		children: "кнопка",
	},
	decorators: [
		(Story) => (
			<div className="app default">
				<Story />
			</div>
		),
	],
}

export const EmptyDark: Story = {
	args: {
		theme: ThemeEnum.EMPTY,
		children: "кнопка",
	},
	decorators: [
		(Story) => (
			<div className="app dark">
				<Story />
			</div>
		),
	],
}
