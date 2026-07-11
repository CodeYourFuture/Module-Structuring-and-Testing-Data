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

test("should return 0 if the character in not in the given string", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 1 if the is 1 occurrence of the char in the string", () => {
  const str = "abc";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should return 0 if there is a empty string ", () => {
  const str = "";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 if character is empty", () => {
  const str = "abcdefg";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should be case insensitive ", () => {
  const str = "Successful";
  const char = "s";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});
