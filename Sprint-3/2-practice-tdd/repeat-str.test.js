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
  expect(repeatStr("hello", 3)).toEqual("hellohellohello");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.

test("should return the original string when count is 1", () => {
  expect(repeatStr("world", 1)).toEqual("world");
});

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

test("should return an empty string when count is 0", () => {
  expect(repeatStr("test", 0)).toEqual("");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.

test("should throw an error when count is negative", () => {
  expect(() => {
    repeatStr("error", -2);
  }).toThrow("Count must be a non-negative integer");
});

test("should throw an error when count is not a number", () => {
  expect(() => {
    repeatStr("error", "-2");
  }).toThrow("Count must be a non-negative integer");
});
