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

_________________________________________SOLUTION______________________________________________________

                                         //Code Implementation


function repeat(str, count) {
    // Handle count of 0: return an empty string
    if (count === 0) {
        return "";
    }
    
    // Handle count of 1: return the original string
    if (count === 1) {
        return str;
    }
    
    // Handle negative count: throw an error or return an error message
    if (count < 0) {
        throw new Error("Count cannot be negative");
    }
    
    // For count greater than 1, repeat the string `count` times
    return str.repeat(count);
}

// Test cases
console.log(repeat("abc", 3));    // Expected output: "abcabcabc"
console.log(repeat("abc", 1));    // Expected output: "abc"
console.log(repeat("abc", 0));    // Expected output: ""
try {
    console.log(repeat("abc", -2)); // Expected output: Error thrown
} catch (e) {
    console.log(e.message); // Output the error message
}

/*
                   Explanation of the Code
Case: Count of 0:
Returns an empty string "".
Case: Count of 1:
Returns the original string, ensuring no repetition.
Case: Negative Count:
Throws an error, stating "Count cannot be negative".
Positive Count Greater Than 1:
Uses JavaScript’s built-in .repeat() method to repeat str the specified count times.
🧪 Example Execution
repeat("abc", 3) returns "abcabcabc".
repeat("abc", 1) returns "abc".
repeat("abc", 0) returns "".
repeat("abc", -2) throws an error: "Count cannot be negative".

*/