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

// countChar('aaaaa', 'a');

const getOrdinalNumber = require('./get-ordinal-number');

test('description', () => {
  expect(getOrdinalNumber(1)).toBe('1st');
  expect(getOrdinalNumber(21)).toBe('21st');
  expect(getOrdinalNumber(0)).toBe('0th')
});
test('The ordinal number for 12 is 12th', () => {
  expect(getOrdinalNumber(12)).toBe('12th');
});
