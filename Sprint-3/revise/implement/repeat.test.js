// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

// Import the function to test
const repeat = require('./repeat');

describe('repeat function', () => {
    test('should throw an error for negative count', () => {
        expect(() => repeat("abc", -1)).toThrow("Count cannot be negative.");
    });

    test('should return empty string for count of 0', () => {
        expect(repeat("abc", 0)).toBe("");
    });

    test('should return repeated string for positive count', () => {
        expect(repeat("abc", 3)).toBe("abcabcabc");
    });

    test('should handle empty string correctly', () => {
        expect(repeat("", 5)).toBe("");
    });

    test('should throw an error for non-string input', () => {
        expect(() => repeat(123, 2)).toThrow("The first argument must be a string.");
    });

    test('should throw an error for non-integer count', () => {
        expect(() => repeat("abc", 1.5)).toThrow("The second argument must be an integer.");
    });
});