import { classnames } from "./classnames"

describe("classnames", () => {
	test("главный класс добавляется правильно", () => {
		expect(classnames("clx")).toBe("clx")
	})

	test("условные классы добавляются правильно", () => {
		expect(classnames("clx", { one: true, last: false })).toBe("clx one")
	})

	test("доп классы добавляются правильно", () => {
		expect(classnames("clx", { one: true, last: false }, ["ugu"])).toBe(
			"clx one ugu"
		)
	})
})
