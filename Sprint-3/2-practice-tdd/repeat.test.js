// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// Case 1: Repeats String coun times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case 2:  handle Count of 1:

test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  expect(repeat(str, count)).toEqual("hello");
});
// Returns the original str without repetition, ensuring that a count of 1 results in no repetition.

// case 3: Handle Count of 0:

test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  expect(repeat(str, count)).toEqual("");
});

// Returns an empty string, ensuring that a count of 0 results in an empty output.

// Case 4: Negative count

test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Count must be a non-negative integer");
});
// Throws an error or return an appropriate error message, as negative counts are not valid.

// Tested for all case using npx jest 