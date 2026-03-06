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
test("should count zero occurrences of a character", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Non-consecutive occurrances
// Given the input string `str`,
// And a character `char` that appears in more than one block within `str`.
// When the function is called with these inputs,
// Then it should return the number of total occurrances.
test("should count non-contiguous occurrences of a character", () => {
  const str = "aaaaabba";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(6);
});

// Scenario: Same character in upper and lower case.
// Given the input string 'str'
// And a character 'char' that apears in both lower case and upper case.
// When the function is called with these inputs,
// Then it should only count when the cases match
test("should be case sensitive", () => {
  const str = "Hello, how are you";
  const char = "H";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Non-alphabetical chars in the string.
// Given the input string 'str'
// And a character 'char' that is not in the alphabet
// When the function is called with these inputs,
// Then it should match as usual
test("should match non-alphabetical chars", () => {
  const str = "Incredible news! We've joined Code Your Future!";
  const char = "!";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
