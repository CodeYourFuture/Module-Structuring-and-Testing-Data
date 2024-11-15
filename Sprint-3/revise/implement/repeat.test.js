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
// Function to repeat the string 'str' by 'count' times
// Function to repeat a string 'str' for a given 'count' times

function repeat(str, count) {
    // Check if count is a positive integer
    if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) {
        throw new Error("Count must be a non-negative integer");
    }

    // Handle count of 0
    if (count === 0) {
        return '';
    }

    // Handle count of 1
    if (count === 1) {
        return str;
    }

    // Return the repeated string
    return str.repeat(count);
}


// Test cases
console.log(repeat("hello", 5));  // Expected: "hellohellohellohellohello"
console.log(repeat("world", 0));  // Expected: ""
console.log(repeat("!", 1));  // Expected: "!"
console.log(repeat("test", -3));  // Expected: Error "Count must be a non-negative integer"
console.log(repeat("test", 3.5));  // Expected: Error "Count must be a non-negative integer"