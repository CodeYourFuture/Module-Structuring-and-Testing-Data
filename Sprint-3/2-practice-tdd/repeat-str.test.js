const repeatStr = require("./repeat-str");

test("should repeat the string count times", () => {
  expect(repeatStr("hello", 3)).toEqual("hellohellohello");
});

test("should return the original string when count is 1", () => {
  expect(repeatStr("hello", 1)).toEqual("hello");
});

test("should return empty string when count is 0", () => {
  expect(repeatStr("hello", 0)).toEqual("");
});

test("should throw an error when count is negative", () => {
  expect(() => repeatStr("hello", -1)).toThrow();
});
