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
test("should return the original input with no repetition", () => {
  const str = "milk";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual(str);
})

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.
test("should return an empty string for zero count times", () => {
  const str = "rice";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
})

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("should return an error message", () => {
  const str = "food";
  const count = -2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("Negative number invalid");
})

test("should return an empty string when empty string is expected count number of times", () => {
  const str = "";
  const count = 23;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
})

test("should repeat the number count times as a string", () => {
  const str = 1;
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("111");
});

test("should repeat boolean count times as a string", () => {
  const str = true;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("truetrue");
});

test("should repeat null count times as a string", () => {
  const str = null;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("nullnull");
});

test("should repeat undefined count times as a string", () => {
  const str = undefined;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("undefinedundefined");
});

// case: array input
test("should repeat [] count times as a string", () => {
  const str = [];
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Non-integer positive count
test("should return an error message for non-integer positive count", () => {
  const str = "apple";
  const count = 2.5;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("Invalid count: count should be an integer");
});

// case: Non-integer negative count
test("should return an error message for non-integer negative count", () => {
  const str = "banana";
  const count = -1.7;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("Invalid count: count should be an integer");
});

// case: Object input
test("should repeat an object count times as a string", () => {
  const str = {};
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("[object Object][object Object]");
});
