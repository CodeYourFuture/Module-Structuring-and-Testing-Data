/**
 * repeatStr - Full Test Suite
 * --------------------------
 * These tests cover all the cases required by the assignment:
 * 1. Multiple repetitions.
 * 2. Count of 1.
 * 3. Count of 0.
 * 4. Negative count (Error handling).
 */

const repeatStr = require("./repeat-str");

// Case 1: Handle multiple repetitions
test("should repeat the string count times (e.g., 3 times)", () => {
  const str = "hello";
  const count = 3;
  const result = repeatStr(str, count);
  expect(result).toEqual("hellohellohello");
});

// Case 2: Handle count of 1
test("should return the original string without repetition when count is 1", () => {
  const str = "hello";
  const count = 1;
  const result = repeatStr(str, count);
  expect(result).toEqual("hello");
});

// Case 3: Handle count of 0
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const result = repeatStr(str, count);
  expect(result).toEqual("");
});

// Case 4: Handle negative count
test("should throw an error when count is a negative integer", () => {
  const str = "hello";
  const count = -1;

  // Note: To test for errors in Jest, we wrap the function call in an anonymous function
  expect(() => {
    repeatStr(str, count);
  }).toThrow();
});
