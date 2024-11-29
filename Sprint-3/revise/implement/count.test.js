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

// Import the function to test
const countChar = require('./count');

describe('countChar', () => {
    test('should count multiple occurrences of a character', () => {
        expect(countChar('aaaaa', 'a')).toBe(5);
    });

    test('should return 0 when the character does not exist', () => {
        expect(countChar('hello', 'z')).toBe(0);
    });

    test('should handle an empty string', () => {
        expect(countChar('', 'a')).toBe(0);
    });

    test('should count characters correctly in a case-sensitive manner', () => {
        expect(countChar('AaAaA', 'a')).toBe(2);
        expect(countChar('AaAaA', 'A')).toBe(3);
    });

    test('should throw an error for invalid inputs', () => {
        expect(() => countChar(null, 'a')).toThrow("Invalid input");
        expect(() => countChar('hello', '')).toThrow("Invalid input");
        expect(() => countChar('hello', 'ab')).toThrow("Invalid input");
    });

    test('should handle special characters correctly', () => {
        expect(countChar('hello-world', '-')).toBe(1);
        expect(countChar('123!@#', '!')).toBe(1);
    });
});
