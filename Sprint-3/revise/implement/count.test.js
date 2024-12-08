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

function countChar(str, char){
    let count = 0;

    str = str.toLowerCase(); 
    char = char.toLowerCase();

    for(let i = 0; i < str.length; i++) {
        if(str[i] === char){
            count++
        }
    }
    return count
}
console.log(countChar("hello", "l"))

// Test

describe('countChar', () => {
    test('should count occurrences of character in string', () => {
        expect(countChar("saqib", "a")).toBe(1); 
    })

    test('should return 0 when character is not found in string', () => {
        expect(countChar("saqib", "z")).toBe(0);  
    });

    test('should return the correct count for multiple occurrences', () => {
        expect(countChar("banana", "a")).toBe(3); 
    });

    test('should return 0 for an empty string', () => {
        expect(countChar("", "a")).toBe(0); 
    });

    test('should be case-sensitive', () => {
        expect(countChar("SaQiB", "a")).toBe(0);  
        expect(countChar("SaQiB", "S")).toBe(1); 
    });
})
