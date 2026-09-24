// Implement a function repeatStr
const repeatStr = require("./repeat-str");

// Case: handle multiple repetitions
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1
test("should return the original string when count is 1", () => {
  const str = "Maryam";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual(str);
});

// Case: handle count of 0
test("should return an empty string when count is 0", () => {
  const str = "Hello World!";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: handle negative count
test("should throw an error when count is negative", () => {
  const str = "Hello World!";
  const count = -1;
  expect(() => repeatStr(str, count)).toThrow();
});
// Case: empty string with count of 3
test("should return an empty string when string is empty and count is 3", () => {
  const str = "";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: empty string with count of 1
test("should return an empty string when string is empty and count is 1", () => {
  const str = "";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: empty string with count of 0
test("should return an empty string when string is empty and count is 0", () => {
  const str = "";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: empty string with negative count
test("should throw an error when string is empty and count is negative", () => {
  const str = "";
  const count = -1;
  expect(() => repeatStr(str, count)).toThrow();
});
