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

test("should return 0 when character does not occur in string", () => {
  const str = "hello world";
  const char = "x";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
// Scenario: Case Sensitivity
// Given the input string `str`,
// And a character `char` that exists in `str` but with different case (e.g., 'A' in 'aAaAa'),
// When the function is called with these inputs,
// Then it should count occurrences of `char` in a case-sensitive manner, meaning 'A' and 'a' are treated as distinct characters.
test("should count characters in a case-sensitive manner", () => {
  const str = "aAaAa";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(2);
}); 

// Scenario: non-alphanumeric Characters
// Given the input string `str`,
// And a character `char` that is a non-alphanumeric character (e.g., '!' in 'Hello, World!'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`, demonstrating that the function can handle special characters as well.
test("should count non-alphanumeric characters", () => {
  const str = "Hello, World!";
  const char = "!";
  const count = countChar(str, char);
  expect(count).toEqual(1);
}); 