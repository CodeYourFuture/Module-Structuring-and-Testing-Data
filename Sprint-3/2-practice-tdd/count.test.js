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
test("should return 0 when character is not present", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toBe(0);
});

// Scenario: Single Occurrence
test("should count a single occurrence of a character", () => {
  const str = "hello";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toBe(1);
});

// Scenario: Mixed string
test("should count occurrences in a mixed string", () => {
  const str = "banana";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toBe(3);
});

// Scenario: Empty string
test("should return 0 for empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toBe(0);
});

// Scenario: Case sensitivity
test("should be case sensitive", () => {
  const str = "AaAa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toBe(2);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
