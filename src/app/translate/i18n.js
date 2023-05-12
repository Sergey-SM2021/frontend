import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: "Русский",
		debug: __IS_DEV__ ? true : false,
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
