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

test("should return the original string when count is 1", () => {
  const str = "world";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("world");
});

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

test("should return an empty string when count is 0", () => {
  const str = "world";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.

test("should throw an error when count is negative", () => {
  const str = "world";
  const count = -1;

  expect(() => {
    repeatStr(str, count);
  }).toThrow("count cannot be negative");
});

// Case: Handle empty string:
// Given a target string empty `str`,
// When the repeatStr function is called with any positive amount,
// Then it should return an empty string.

test("should return an empty string when str is empty", () => {
  const str = "";
  const count = 2;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle non numeric count
// given a count of a anything not a number
// Should throw error
test("should throw an error when count is not a number", () => {
  const str = "world";
  const count = "a";

  expect(() => {
    repeatStr(str, count);
  }).toThrow("count must be a whole number");
});

test("should throw an error when str is empty and count is negative", () => {
  const str = "";
  const count = -2;

  expect(() => {
    repeatStr(str, count);
  }).toThrow("count cannot be negative");
});

//Case: Handle decimal numbers
//given a count with a decimal
//should error
test("should throw an error when count has a decimal", () => {
  const str = "world";
  const count = 3.4;

  expect(() => {
    repeatStr(str, count);
  }).toThrow("count must be a whole number");
});
