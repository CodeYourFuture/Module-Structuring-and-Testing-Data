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

//.....Answer.....
const countChar =require('./countChar')

describe('countChar', () => {
  test('counts multiple occurrences of a character', () => {
    expect(countChar('aaaaa', 'a')).toBe(5); 
  });

  test('returns 0 if no occurrences are found', () => {
    expect(countChar('hello', 'z')).toBe(0); 
  });

  test('is case-sensitive', () => {
    expect(countChar('Hello', 'h')).toBe(0); 
    expect(countChar('Hello', 'H')).toBe(1);
  });

  test('throws an error for invalid input types', () => {
    expect(() => countChar(123, 'a')).toThrow('Invalid input. The first argument must be a string, and the second must be a single character.');
    expect(() => countChar('hello', 'ab')).toThrow('Invalid input. The first argument must be a string, and the second must be a single character.');
  });
});




