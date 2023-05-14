export default {
	clearMocks: true,
	testEnvironment: "jsdom",
	moduleDirectories: ["node_modules", "src"],
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	moduleNameMapper: {
		"\\.svg$": "<rootDir>/__mocks__/svg.js",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
		"\\.(scss)$": "identity-obj-proxy",
	},
}
