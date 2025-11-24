// Implement a function repeat

const repeat = require("./repeat");

// case: handle Count of 1:
// When count = 1, return the original string unchanged
test("should return original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

// case: Handle Count of 0:
// When count = 0, return empty string
test("should return an empty string when count is 0", () => {
  const str = "world";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Negative Count:
// When count < 0, throw an error
test("should throw an error when count is negative", () => {
  const str = "test";
  const count = -3;
  expect(() => repeat(str, count)).toThrow("Count must be non-negative");
});
