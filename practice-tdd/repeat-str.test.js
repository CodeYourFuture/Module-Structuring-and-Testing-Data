// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;

  const repeatedStr = repeatStr(str, count);

  expect(repeatedStr).toEqual("hello");
});
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;

  const repeatedStr = repeatStr(str, count);

  expect(repeatedStr).toEqual("");
});

test("should throw an error when count is negative", () => {
  expect(() => repeatStr("hello", -1)).toThrow();
});
