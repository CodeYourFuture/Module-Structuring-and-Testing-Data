// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require('./count');

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("should return 0 when character is not found", () => {
  const str = "hello world";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Case sensitivity
// Given the input string str with mixed case,
// And a character char with specific case,
// When the function is called with these inputs,
// Then it should only count occurrences that match the case exactly.
test("should be case sensitive when counting characters", () => {
  const str = "Hello World";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(0); // 'h' is not the same as 'H'
});

// Scenario: Single occurrence
// Given the input string str,
// And a character char that appears exactly once,
// When the function is called with these inputs,
// Then it should return 1.
test("should count single occurrence correctly", () => {
  const str = "hello";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Empty string
// Given an empty input string str,
// And any character char,
// When the function is called with these inputs,
// Then it should return 0.
test("should return 0 for empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});