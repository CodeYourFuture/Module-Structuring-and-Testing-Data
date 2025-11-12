

const repeatStr = require("./repeat-str");

test("should repeat the string count times", () => {
  expect(repeatStr("hello", 3)).toBe("hellohellohello");
});

test("should return the original string when count is 1", () => {
  expect(repeatStr("world", 1)).toBe("world");
});

test("should return an empty string when count is 0", () => {
  expect(repeatStr("test", 0)).toBe("");
});

test("should throw an error when count is negative", () => {
  expect(() => repeatStr("oops", -2)).toThrow("Count must be a non-negative integer");
});

