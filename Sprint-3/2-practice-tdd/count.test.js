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
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should count multiple occurrences of a character", () => {
  const str = "blind";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count multiple occurrences of a character", () => {
  const str = "blood";
  const char = "o";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

test("should count multiple occurrences of a character", () => {
  const str = "blood";
  const char = "o";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

test("should count multiple occurrences of a character", () => {
  const str = "blood";
  const char = "l";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count multiple occurrences of a character", () => {
  const str = "bbbrf";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count multiple occurrences of a character", () => {
  const str = "ooooa";
  const char = "o";
  const count = countChar(str, char);
  expect(count).toEqual(4);
});

// handling invalid input
// the tests work assuming that only letters are in the string
// numbers and special characters are not tested for
