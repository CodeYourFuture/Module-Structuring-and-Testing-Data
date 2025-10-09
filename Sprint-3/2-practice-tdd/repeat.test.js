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
// Then it should throw an error or return an appropriate error message, as repeating a string zero times is not valid.
test("should throw an error when count is 0", () => {
  const str = "hello";
  const count = 0;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is a decimal number:
// Given a target string str and a decimal number for count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, indicating that the count should be a positive integer number.
test("should throw an error when count is a decimal number", () => {
  const str = "hello";
  const count = 2.5;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is not an integer number:
// Given a target string str and a non-integer input for count (e.g., a string or an array),
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, indicating that the count should be a positive integer number.
test("should throw an error when count is not a number", () => {
  const str = "hello";
  const count = "abc";
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is an array:
test("should throw an error when count is an array", () => {
  const str = "hello";
  const count = [2];
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is an object:
test("should throw an error when count is an object", () => {
  const str = "hello";
  const count = { num: 2 };
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is null:
test("should throw an error when count is null", () => {
  const str = "hello";
  const count = null;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is a boolean:
test("should throw an error when count is a boolean", () => {
  const str = "hello";
  const count = true;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
});

// case: count is undefined:
test("should throw an error when count is undefined", () => {
  const str = "hello";
  const count = undefined;
  expect(() => repeat(str, count)).toThrow(
    "Count should be a positive integer number"
  );
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

// case: str is not a string eg: number:
test("should throw an error when str is a number", () => {
  const str = 123;
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});

// case: str is an array:
test("should throw an error when str is an array", () => {
  const str = ["hello"];
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});

// case: str is an object:
test("should throw an error when str is an object", () => {
  const str = { text: "hello" };
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});

// case: str is null:
test("should throw an error when str is null", () => {
  const str = null;
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});

// case: str is a boolean:
test("should throw an error when str is a boolean", () => {
  const str = true;
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});

// case: str is undefined:
test("should throw an error when str is undefined", () => {
  const str = undefined;
  const count = 2;
  expect(() => repeat(str, count)).toThrow(
    "Input str should be a string in format 'Hello'"
  );
});
