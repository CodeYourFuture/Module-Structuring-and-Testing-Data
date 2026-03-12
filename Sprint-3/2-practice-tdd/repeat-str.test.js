// Implement a function repeatStr
const repeatStr = require("./repeat-str");

// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions
// Given a target string `str` and a positive integer `count` greater than 1,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);

  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1
// Given a target string `str` and a count equal to 1,
// Then it should return the original string.

test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);

  expect(repeatedStr).toEqual("hello");
});

// Case: handle count of 0
// Given a target string `str` and a count equal to 0,
// Then it should return an empty string.

test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);

  expect(repeatedStr).toEqual("");
});

// Case: handle negative count
// Given a negative integer count,
// Then the function should throw an error.

test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -1;

  expect(() => repeatStr(str, count)).toThrow();
});
