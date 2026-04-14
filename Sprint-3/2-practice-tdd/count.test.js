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
test("should return 0 when character does not exist in string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Case Sensitivity
test("should be case sensitive", () => {
  expect(countChar("AaAa", "a")).toBe(2);
});

// Scenario: Empty String
test("should return 0 for an empty string", () => {
  expect(countChar("", "a")).toBe(0);
});

// Scenario: Special Characters
test("should count special characters", () => {
  expect(countChar("!@#$%^&*()!", "!")).toBe(2);
});

// Scenario: Non-String Inputs
test("should handle non-string inputs gracefully", () => {
  expect(countChar(12345, "1")).toBe(0);
  expect(countChar(null, "a")).toBe(0);
  expect(countChar(undefined, "a")).toBe(0);
});
test ("should count numeric characters in a string", () => {

  expect(countChar("12345", "1")).toBe(1);
});
// Scenario: Space Character
test("should count spaces correctly", () => {
  expect(countChar("a a a", " ")).toBe(2);
});