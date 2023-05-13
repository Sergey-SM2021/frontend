const fn = (str: string) => str.split("").reverse().join("") 

describe("classnames", () => {
	test("first test",()=>{
		expect(fn("str")).toBe("rts")
	})
})
