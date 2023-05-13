import { classnames } from "./classnames";

describe("classnames", () => {
  expect(classnames("main", {}, [])).toBe("main");
});
