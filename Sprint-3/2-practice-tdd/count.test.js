/**
 *
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
*
*/

// count.test.js

// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");

// Scenario: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
test("should return 0 when character does not exist in string", () => {
  const str = "hello world";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Additional test cases to ensure robustness:

// Scenario: Single Occurrence
test("should count a single occurrence of a character", () => {
  const str = "hello";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Character appears at the beginning and end
test("should count character at beginning and end of string", () => {
  const str = "abracadabra";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: Case sensitivity
test("should be case sensitive when counting characters", () => {
  const str = "Hello World";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(0); // 'H' is uppercase, 'h' is lowercase
});

// Scenario: Character is a space
test("should count spaces when searching for space character", () => {
  const str = "hello world how are you";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(4);
});

// Scenario: Character is a number
test("should count numeric characters", () => {
  const str = "abc123abc123abc";
  const char = "1";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: Empty string
test("should return 0 when string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Character is longer than one character (edge case)
test("should handle when char parameter is longer than one character", () => {
  const str = "hello";
  const char = "ll";
  const count = countChar(str, char);
  // Depending on requirements, this might count occurrences of the substring
  // For this implementation, we'll specify it should count the first character only
  expect(count).toEqual(2); // Counting 'l' occurrences
});


