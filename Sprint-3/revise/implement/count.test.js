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

const countChar = require('./countChar');  // Import the function

describe('countChar', () => {

  // Scenario 1: Multiple Occurrences
  test('counts overlapping occurrences', () => {
    expect(countChar("aaaaa", "a")).toBe(5);  // 'a' appears 5 times
  });

  // Scenario 2: No Occurrences
  test('returns 0 if character is not found', () => {
    expect(countChar("hello world", "x")).toBe(0);  // 'x' does not exist
  });

  // Scenario 3: Single Occurrence
  test('counts a single occurrence', () => {
    expect(countChar("hello world", "o")).toBe(2);  // 'o' appears 2 times
  });

  // Scenario 4: Empty String
  test('returns 0 for empty string', () => {
    expect(countChar("", "a")).toBe(0);  // No characters to count
  });

});
