const repeat = require("./repeat");

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

test("should return the original string when count is 1", () => {
  const str = "test";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("test");
});

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

test("should return an empty string when count is 0", () => {
  const str = "anything";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should return an empty string, as negative counts are not valid.

test("should return an empty string when count is negative", () => {
  const str = "error";
  const count = -1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});