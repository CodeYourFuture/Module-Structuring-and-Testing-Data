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

test("should count multiple occurrences of a character", () => {
  const str = "banana";
  const char = "n";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

test("should count multiple occurrences of a character", () => {
  const str = "appleTree";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count multiple occurrences of a character", () => {
  const str = "strawberry";
  const char = "r";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count multiple occurrences of a character", () => {
  const str = "ghost";
  const char = "o";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});