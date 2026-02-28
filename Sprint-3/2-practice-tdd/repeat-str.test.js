// Implement a function repeatStr
const repeatStr = require("./repeat-str");
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(count, str);
  expect(repeatedStr).toEqual("hellohellohello");
});
// test("should return the original string when count is 1", () => {
//   const str = "hello";
//   const count = 1;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("hello");
// });
// test("should return an empty string when count is 0", () => {
//   const str = "hello";
//   const count = 0;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("");
// });
// // Given a target string `str` and a positive integer `count`,
// // When the repeatStr function is called with these inputs,
// // Then it should:
// // - Validate that `count` is a non-negative integer.
// // - If `count` is 0, return an empty string.
// // - If `count` is 1, return the original `str`.
// // - If `count` is greater than 1, concatenate `str` to itself `count` times and return the resulting string.

// // Case: handle multiple repetitions:
// // Given a target string `str` and a positive integer `count` greater than 1,
// // When the repeatStr function is called with these inputs,
// // Then it should return a string that contains the original `str` repeated `count` times.
// test("should repeat the string count times", () => {
//   const str = "hello";
//   const count = 3;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("hellohellohello");
// });
// // Case: handle count of 1:
// // Given a target string `str` and a `count` equal to 1,
// // When the repeatStr function is called with these inputs,
// test("should repeat the string count times", () => {
//   const str = "hello";
//   const count = 3;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("hellohellohello");
// });

// // Case: handle count of 1:
// // Given a target string `str` and a `count` equal to 1,
// // When the repeatStr function is called with these inputs,
// // Then it should return the original `str` without repetition.
// test("should return the original string when count is 1", () => {
//   const str = "hello";
//   const count = 1;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("hello");
// });
// // Case: handle count of 0:
// // Given a target string `str` and a `count` equal to 0,
// // When the repeatStr function is called with these inputs,
// // Then it should return an empty string.
// test("should return the original string when count is 1", () => {
//   const str = "hello";
//   const count = 1;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("hello");
// });
// // Case: Handle count of 0:
// // Given a target string `str` and a `count` equal to 0,
// // When the repeatStr function is called with these inputs,
// // Then it should return an empty string.
// test("should return an empty string when count is 0", () => {
//   const str = "hello";
//   const count = 0;
//   const repeatedStr = repeatStr(str, count);
//   expect(repeatedStr).toEqual("");
// });
// // Case: Handle negative count:
// // Given a target string `str` and a negative integer `count`,
// // When the repeatStr function is called with these inputs,
// // Then it should throw an error, as negative counts are not valid.
// test("should throw an error when count is negative", () => {
//   const str = "hello";
//   const count = -1;
//   expect(() => repeatStr(str, count)).toThrow("Count must be a non-negative integer");
// });
// // Case: Handle non-integer count:
// // Given a target string `str` and a non-integer value for `count`,
// // When the repeatStr function is called with these inputs,
// // Then it should throw an error, as non-integer counts are not valid.
// test("should throw an error when count is not an integer", () => {
//   const str = "hello";
//   const count = 2.5;
//   expect(() => repeatStr(str, count)).toThrow("Count must be a non-negative integer");
// });
