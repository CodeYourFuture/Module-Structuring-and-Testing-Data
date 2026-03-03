/**
 * Origignal file:
 * 
// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
*
* End of file
*/

// Implementation:

const countChar = require("./count");

describe("countChar function", () => {
  test("should count multiple occurrences of a character", () => {
    const str = "aaaaa";
    const char = "a";
    const count = countChar(str, char);
    expect(count).toEqual(5);
  });

  test("should return 0 when character does not occur in the string", () => {
    const str = "hello world";
    const char = "z";
    const count = countChar(str, char);
    expect(count).toEqual(0);
  });

  // Additional test cases to ensure robustness
  test("should handle empty string", () => {
    const str = "";
    const char = "a";
    const count = countChar(str, char);
    expect(count).toEqual(0);
  });

  test("should handle single occurrence", () => {
    const str = "hello world";
    const char = "h";
    const count = countChar(str, char);
    expect(count).toEqual(1);
  });

  test("should handle case sensitivity", () => {
    const str = "Hello World";
    const char = "h";
    const count = countChar(str, char);
    expect(count).toEqual(0); // 'H' is different from 'h'
  });

  test("should handle invalid inputs gracefully", () => {
    expect(countChar(123, "a")).toEqual(0); // Non-string first argument
    expect(countChar("hello", 123)).toEqual(0); // Non-string second argument
    expect(countChar("hello", "ab")).toEqual(0); // Multiple characters
  });
});

