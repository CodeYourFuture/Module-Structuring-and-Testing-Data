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

test("should return 0 when character does not exist in the string", () => {
  const str = "hello world";
  const char = "x";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should be case sensitive and only count exact character matches", () => {
  const str = "AaAaAa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should be case sensitive - uppercase A should not match lowercase a", () => {
  const str = "AaAaAa";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count occurrences of numeric characters", () => {
  const str = "1a2b3c1d2e1f";
  const char = "1";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count occurrences of special characters", () => {
  const str = "hello!world!test!";
  const char = "!";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count occurrences of spaces", () => {
  const str = "hello world this is a test";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});
