// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

// Answer:
// countChar.test.js

const countChar = require('./countChar'); // Import the function

// Test for multiple occurrences of the character
test('should return the correct count of a character in a string', () => {
  expect(countChar('aaaaa', 'a')).toBe(5);
});

// Test when the character does not exist in the string
test('should return 0 if character does not exist in the string', () => {
  expect(countChar('hello', 'z')).toBe(0);
});

// Test when the string is empty
test('should return 0 for an empty string', () => {
  expect(countChar('', 'a')).toBe(0);
});

// Test case-sensitive character count
test('should count characters in a case-sensitive manner', () => {
  expect(countChar('aAaaA', 'a')).toBe(3);
  expect(countChar('aAaaA', 'A')).toBe(2);
});
