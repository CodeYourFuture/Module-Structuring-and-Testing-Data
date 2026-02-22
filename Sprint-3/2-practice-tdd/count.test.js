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
  const str = "welcome";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Single Occurrence
// Given a string where the character appears exactly once,
// Then it should return 1.

test("should return 1 when character appears once", () => {
  const str = "apple";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Empty String
// Given an empty string,
// Then it should return 0 for any character.

test("should return 0 for empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
