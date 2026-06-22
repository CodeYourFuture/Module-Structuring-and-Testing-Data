// Implement a function repeatStr
const repeatStr = require("./repeat-str");
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

describe("repeatStr", () => {
  test("repeats string count times when count is greater than 1", () => {
    expect(repeatStr("hello", 3)).toEqual("hellohellohello");
  });

  test("returns original string when count is 1", () => {
    expect(repeatStr("hello", 1)).toEqual("hello");
  });

  test("returns empty string when count is 0", () => {
    expect(repeatStr("hello", 0)).toEqual("");
  });

  test("throws an error when count is negative", () => {
    expect(() => repeatStr("hello", -3)).toThrow("Invalid Count");
  });

  test("returns empty string when the input string is empty", () => {
    expect(repeatStr("", 3)).toEqual("");
  });
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
