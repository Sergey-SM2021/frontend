import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { I18nextProvider, withTranslation } from "react-i18next"
import i18n from "./i18nTestConfig"

describe("sidebar", () => {
	it("render", () => {
		const WithTranslationSidebar = withTranslation()(Sidebar)
		render(
			<I18nextProvider i18n={i18n}>
				<WithTranslationSidebar />
			</I18nextProvider>
		)
		expect(screen.getByText("toggle")).toBeInTheDocument()
	})

	it("sidebar может сворачиваться и разворачиваться", () => {
		const WithTranslationSidebar = withTranslation()(Sidebar)
		render(
			<I18nextProvider i18n={i18n}>
				<WithTranslationSidebar />
			</I18nextProvider>
		)
		const button = screen.getByText("toggle")
		expect(screen.getByText("lol")).toHaveClass("sidebar__open")
		fireEvent.click(button)
		expect(screen.getByText("lol")).toHaveClass("sidebar")
		expect(screen.getByText("lol")).not.toHaveClass("sidebar__open")
	})
})
