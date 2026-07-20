// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
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
