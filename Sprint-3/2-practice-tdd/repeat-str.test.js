// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string str and a positive integer count,
// When the repeatStr function is called with these inputs,
// Then it should:
function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  return str.repeat(count);
}

module.exports = repeat;

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeatStr function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeatStr function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
const repeat = require("./repeat");

// Case 1: Repeat string multiple times
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case 2: Handle count of 1
test("should return the original string when count is 1", () => {
  const str = "world";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("world");
});

// Case 3: Handle count of 0
test("should return an empty string when count is 0", () => {
  const str = "test";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// Case 4: Negative count
test("should throw an error when count is negative", () => {
  const str = "oops";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Count must be a non-negative integer");
});
