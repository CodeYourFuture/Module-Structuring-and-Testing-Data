// Implement a function repeatStr
const repeatStr = require("./repeat-str");

// Case: repeat string multiple times
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(count, str);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: count = 1
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(count, str);
  expect(repeatedStr).toEqual("hello");
});

// Case: count = 0
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(count, str);
  expect(repeatedStr).toEqual("");
});

// Case: negative count
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -1;
  expect(() => repeatStr(count, str)).toThrow(
    "Count must be a non-negative integer"
  );
});

// Case: non-integer count
test("should throw an error when count is not an integer", () => {
  const str = "hello";
  const count = 2.5;
  expect(() => repeatStr(count, str)).toThrow(
    "Count must be a non-negative integer"
  );
});
