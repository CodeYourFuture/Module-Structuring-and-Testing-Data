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

test("should count multiple occurrences of a different character", () => {
  const str = "banana";
  const char = "n";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.

test("should return 0 when no occurrences of a character are found", () => {
  const str = "Bisrat";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty String or Space
// Given the input string `str`,
// And a character `char` that is an empty string or a space.
// When the function is called with these inputs,
// Then it should handle these edge cases appropriately, returning 0 for an empty string and counting spaces correctly.

test("should return 0 when the string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count characters correctly when the string contains spaces", () => {
  const str = "a a a";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count spaces correctly", () => {
  const str = "a a a";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: Uppercase and Lowercase Characters
// Given the input string `str`,
// And a character `char` that is either uppercase or lowercase.
// When the function is called with these inputs,
// Then it should be case-sensitive, counting occurrences of `char` based on its exact case.

test("should be case-sensitive when searching for lowercase letters", () => {
  const str = "Apple";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should be case-sensitive when searching for uppercase letters", () => {
  const str = "Apple";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
