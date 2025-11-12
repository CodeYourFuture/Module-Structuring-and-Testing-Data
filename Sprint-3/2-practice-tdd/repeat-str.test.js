// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string str and a positive integer count,
// When the repeatStr function is called with these inputs,
// Then it should:

// case 1: repeat String:
// Given a target string str and a positive integer count,
// When the repeatStr function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  expect(repeatStr(str, count)).toEqual("hellohellohello");
});

// case 2: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  expect(repeatStr(str, count)).toEqual("hello");
});

// case 3: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  expect(repeatStr(str, count)).toEqual("");
});

// case 4: Negative Count:
// Given a target string str and a negative integer count,
// When the repeatStr function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("should throw an error for negative count", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeatStr(str, count)).toThrow("Invalid count value");
});

// case 5: Non-integer Count:
// Given a target string str and a non-integer count (e.g., a float or a string),
// When the repeatStr function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as non-integer counts are not valid.
test("should throw an error for non-integer count", () => {
  const str = "hello";
  const count = 2.5;
  expect(() => repeatStr(str, count)).toThrow("Invalid count value");
});
