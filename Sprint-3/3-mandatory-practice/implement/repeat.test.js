const repeat = require("./repeat");

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should return the original string for count of 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

test("should return an empty string for count of 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

test("should throw an error for negative count", () => {
  const str = "hello";
  const count = -3;
  expect(() => repeat(str, count)).toThrow("Count cannot be negative");
});
