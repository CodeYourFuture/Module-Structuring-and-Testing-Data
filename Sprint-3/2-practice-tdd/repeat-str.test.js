// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// A string is repeated count number of times
// If a string is "hello" and count is 3 then
// the hello will be output 3 times with no spaces between

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1:
// If count is 1 then the string is not repeated and
// will be output for example if the string is "Hello"
// then the output will be "Hello"

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Case: Handle count of 0:
// If the the string is empty then count will be 0
// and an empty string will be returned

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual(" ");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.

test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -3;
  expect(() => repeatStr(str, count)).toThrow("Count must be positive");
});
