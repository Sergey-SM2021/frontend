import { createRoot } from "react-dom/client"
import { ThemeProvider } from "app/providers/theme"
import { BrowserRouter } from "react-router-dom"
import { App } from "app/App"

import "./app/translate/i18n"
import { ErrorBoundary } from "app/ErrorBoundary"

const root = createRoot(document.getElementById("root"))
root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</ErrorBoundary>
)
