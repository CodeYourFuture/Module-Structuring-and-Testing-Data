/**
 *
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

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
*
*/

// repeat-str.test.js
const repeatStr = require("./repeat-str");

// Case: handle multiple repetitions
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Case: Handle count of 0
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle negative count
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -1;

  expect(() => {
    repeatStr(str, count);
  }).toThrow("Count must be a positive integer");
});

// Additional edge cases
test("should handle empty string input", () => {
  const str = "";
  const count = 5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should handle count as a string number", () => {
  const str = "abc";
  const count = "3";
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("abcabcabc");
});

test("should handle decimal count by flooring", () => {
  const str = "xyz";
  const count = 2.7;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("xyzxyz");
});

test("should throw error for non-numeric count", () => {
  const str = "hello";
  const count = "abc";

  expect(() => {
    repeatStr(str, count);
  }).toThrow("Count must be a number");
});

