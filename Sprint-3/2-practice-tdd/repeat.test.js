// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.
test("should return the string 1 time when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Invalid data value");
});

// case: str is not a string:
// Given a non-string input for str (e.g., a number) and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should convert the non-string str to a string and repeat it count times, returning the appropriately repeated string.
test("should convert non-string str to string and repeat it count times", () => {
  const str = 123;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("123123");
});

// case: count is not a number:
// Given a target string str and a non-numeric input for count (e.g., a string that can be converted to a number),
// When the repeat function is called with these inputs,
// Then it should convert the non-numeric count to a number and repeat the str that many times, returning the appropriately repeated string.
test("should convert non-numeric count to number and repeat the string that many times", () => {
  const str = "hello";
  const count = "3";
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: count is a decimal number:
// Given a target string str and a decimal number for count,
// When the repeat function is called with these inputs,
// Then it should round down the count to the nearest integer and repeat the str that many times, returning the appropriately repeated string.
test("should round down decimal count to nearest integer and repeat the string that many times", () => {
  const str = "hello";
  const count = 3.7;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: str is an empty string:
// Given an empty string for str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should return an empty string, as repeating an empty string any number of times still results in an empty string.
test("should return an empty string when str is an empty string", () => {
  const str = "";
  const count = 5;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: invalid str and count types:
// Given invalid types for both str (e.g., an object) and count (e.g., an array),
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, indicating that the input types are not supported.
test("should throw an error when str and count are of invalid types", () => {
  const str = { text: "hello" };
  const count = [3];
  expect(() => repeat(str, count)).toThrow("Invalid data value");
});
