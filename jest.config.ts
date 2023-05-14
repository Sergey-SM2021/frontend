export default {
	clearMocks: true,
	testEnvironment: "jsdom",
	moduleDirectories: ["node_modules", "src"], 
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"] 
}
