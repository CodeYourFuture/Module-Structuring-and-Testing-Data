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
test ("should return 0 when the character does not exist in the string", () => {
  const str = "exist";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should return 0 when the input character is an empty string", () => {
  const str = "test";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should return 0 when both the input string and character are empty", () => {
  const str = "";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should be case sensitive when counting characters", () => {
  const str = "AaAaA";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count non-alphabet characters", () => {
  const str = "12345!";
  const char = "1";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
// Scenario: Empty String
// Given an empty input string `str`,
// And any character `char` (e.g., 'a'),
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found in the empty string.

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
