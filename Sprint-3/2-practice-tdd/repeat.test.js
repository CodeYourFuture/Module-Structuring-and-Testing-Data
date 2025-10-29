const repeat = require("./repeat");

test("should repeat the string count times", () => {
  expect(repeat("hello", 3)).toEqual("hellohellohello");
});

test("should return the original string when count is 1", () => {
  expect(repeat("hello", 1)).toEqual("hello");
});

test("should return an empty string when count is 0", () => {
  expect(repeat("hello", 0)).toEqual("");
});

test("should throw an error when count is negative", () => {
  expect(() => repeat("hello", -1)).toThrow("Count cannot be negative");
});

test("should repeat string multiple times", () => {
  expect(repeat("abc", 4)).toEqual("abcabcabcabc");
});

test("should handle empty string", () => {
  expect(repeat("", 5)).toEqual("");
});

test("should handle single character", () => {
  expect(repeat("x", 5)).toEqual("xxxxx");
});
