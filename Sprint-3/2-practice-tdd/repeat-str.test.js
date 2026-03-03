/**
 * Original file:
 *
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
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
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
*
* Enf of file
*/

// Implementation:

const repeatStr = require("./repeat-str");

describe("repeatStr function", () => {
  // Test case 1: Multiple repetitions (count > 1)
  test("should repeat the string count times when count > 1", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeatStr(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
  });

  // Test case 2: Count equal to 1
  test("should return the original string when count is 1", () => {
    const str = "hello";
    const count = 1;
    const repeatedStr = repeatStr(str, count);
    expect(repeatedStr).toEqual("hello");
  });

  // Test case 3: Count equal to 0
  test("should return empty string when count is 0", () => {
    const str = "hello";
    const count = 0;
    const repeatedStr = repeatStr(str, count);
    expect(repeatedStr).toEqual("");
  });

  // Test case 4: Negative count
  test("should throw an error when count is negative", () => {
    const str = "hello";
    const count = -1;
    expect(() => {
      repeatStr(str, count);
    }).toThrow("Count must be a positive integer");
  });

  // Additional test cases for robustness
  describe("edge cases", () => {
    test("should handle empty string", () => {
      expect(repeatStr("", 5)).toEqual("");
    });

    test("should handle string with spaces", () => {
      expect(repeatStr("a b ", 2)).toEqual("a b a b ");
    });

    test("should throw error when count is not an integer", () => {
      expect(() => {
        repeatStr("hello", 3.5);
      }).toThrow("Count must be an integer");
    });

    test("should throw error when first argument is not a string", () => {
      expect(() => {
        repeatStr(123, 3);
      }).toThrow("First argument must be a string");
    });
  });
});
