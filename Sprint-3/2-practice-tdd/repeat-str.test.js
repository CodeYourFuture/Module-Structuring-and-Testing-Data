// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  let word = "hello";
  let times = 3;
  const repeatedStr = repeatStr(word, times);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.
test("should repeat the string count times", () => {
  let word = "code your future";
  let times = 1;
  const repeatedStr = repeatStr(word, times);
  expect(repeatedStr).toEqual("code your future");
});
// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
test("should repeat the string is empty ", () => {
  let word = "hello";
  let times = 0;
  const repeatedStr = repeatStr(word, times);
  expect(repeatedStr).toBe("");
});
// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
test("should repeat the string return negative number not allowed ", () => {
  let word = "hello";
  let times = -3;
  const repeatedStr = repeatStr(word, times);
  expect(repeatedStr).toBe("Error:negative number not allowed");
});
