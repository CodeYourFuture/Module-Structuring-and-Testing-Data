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



const repeat = require('./repeat.js');

describe('repeat function', () => {
    test('should repeat string count times', () => {
        expect(repeat("abc", 3)).toBe("abcabcabc");  
        expect(repeat("hello", 2)).toBe("hellohello");  
    });

    test('should return the original string when count is 1', () => {
        expect(repeat("abc", 1)).toBe("abc"); 
        expect(repeat("hello", 1)).toBe("hello");  
    });

    test('should return an empty string when count is 0', () => {
        expect(repeat("abc", 0)).toBe("");  
        expect(repeat("hello", 0)).toBe("");  
    });

    test('should throw an error for negative count', () => {
        expect(() => repeat("abc", -1)).toThrow("Count cannot be negative");
        expect(() => repeat("hello", -5)).toThrow("Count cannot be negative");
    });
});
