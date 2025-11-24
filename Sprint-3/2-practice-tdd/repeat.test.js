// Implement a function repeat

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
  expect(() => repeat("hello", -2)).toThrow("Count must be non-negative");
});

