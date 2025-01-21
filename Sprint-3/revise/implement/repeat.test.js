// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:




const repeatTheString  = require('./repeat');
// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

describe('repeat', () => {
    it('should repeat the string', () => {
        expect(repeatTheString('abc', 3)).toBe('abcabcabc');
    });
// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

    it('should return the original string for count of 1', () => {
        expect(repeatTheString('abc', 1)).toBe('abc');
    });
// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

    it('should return an empty string for count of 0', () => {
        expect(repeatTheString('abc', 0)).toBe('');
    });
// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.


    it('should throw an error for negative count', () => {
        expect(() => repeatTheString('abc', -1)).toThrow("Invalid count value: -1");
    });
});
