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
// Import the countChar function (assuming it's in the same directory as the test file)



const countChar = require('./count.js'); 

describe('countChar', () => {
    
    test('should return the correct count for multiple occurrences (with overlap)', () => {
        expect(countChar("aaaaa", "a")).toBe(5);
        expect(countChar("hello", "l")).toBe(2);
    });

    test('should return 0 when there are no occurrences', () => {
        expect(countChar("hello", "z")).toBe(0);
        expect(countChar("abc", "x")).toBe(0);
    });

    test('should return correct count for edge cases', () => {
        
        expect(countChar("", "a")).toBe(0);

        
        expect(countChar("aA", "a")).toBe(1);
        expect(countChar("aA", "A")).toBe(1);

        
        expect(countChar("$$$$$", "$")).toBe(5);
    });
});

