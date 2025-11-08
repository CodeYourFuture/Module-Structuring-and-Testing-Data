// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string str and a positive integer count,
// When the repeatStr function is called with these inputs,
// Then it should:

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

test("should return the original string without repetition", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

test("should return an empty string if count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should throw an error if count is negative", () => {
  const str = "hello";
  const count = -1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("Error, negative integer");
});
