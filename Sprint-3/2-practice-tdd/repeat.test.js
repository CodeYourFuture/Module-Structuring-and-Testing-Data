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

test("should return original string if count is 1", () => {
  const str = "hello";
  const count = 1;
  expect(repeat(str, count)).toEqual("hello");
}); 

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

test("should return empty string if count is 0", () => {
  const str = "hello";
  const count = 0;
  expect(repeat(str, count)).toEqual("");
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

test("should return error message for negative count", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer");
});

// invalid input tests
test("should return error message for non-integer count", () => {
  const str = "hello";
  const count = 2.5;
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer");
});

test("should return error message for non-string input", () => {
  const str = 123;
  const count = 3;
  expect(() => repeat(str, count)).toThrow("First argument must be a string");
});

test("should return error message for non-string input with invalid count", () => {
  const str = { text: "hello" };
  const count = -2;
  expect(() => repeat(str, count)).toThrow("First argument must be a string");
});

test("should return error message for string input with non number count", () => {
  const str = "hello";
  const count = "3";
  const count2 = [];
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer");
  expect(() => repeat(str, count2)).toThrow("Second argument must be a non-negative integer");
});

test("should return error message for string input with NaN count", () => {
  const str = "hello";
  const count = NaN;
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer");
});

test("should return error message for string input with null count", () => {
  const str = "hello";
  const count = null;
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer");
});

test("should return error message for string input with undefined count", () => {
  const str = "hello";
  const count = undefined;
  expect(() => repeat(str, count)).toThrow("Second argument must be a non-negative integer. Received undefined");
});

test('should have the correct amount of arguments', () => { 
  expect(() => repeat('hello')).toThrow(new Error("Function requires exactly two arguments: a string and a count. Received 1 arguments"));
  expect(() => repeat("hello", 3, 3)).toThrow(new Error("Function requires exactly two arguments: a string and a count. Received 3 arguments"));
 })

