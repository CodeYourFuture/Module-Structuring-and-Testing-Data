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

function repeat(str, count) {
    
    if (count === 0) {
        return '';
    }
    
    // Case: Negative Count
    if (count < 0) {
        throw new Error("Count cannot be negative");
    }
    
   
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str; 
    }
    
    return result;
}

// Example usage:
console.log(repeat("hello", 3)); // "hellohellohello"
console.log(repeat("test", 0)); // ""
console.log(repeat("CYF", 5)) // CYFCYFCYFCYFCYF


// Test ...

describe('repeat function', () => {
    test('should repeat the string the specified number of times', () => {
        expect(repeat("hello", 3)).toBe("hellohellohello");
        expect(repeat("world", 2)).toBe("worldworld");
    });

    test('should return an empty string if count is 0', () => {
        expect(repeat("abc", 0)).toBe("");
    });

    test('should throw an error for negative count', () => {
        expect(() => repeat("error", -1)).toThrow("Count cannot be negative");
    });
});
