import { render, screen } from "@testing-library/react"
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
})
