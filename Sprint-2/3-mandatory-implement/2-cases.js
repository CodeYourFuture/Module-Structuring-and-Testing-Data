// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Function to convert a string to UPPER_SNAKE_CASE
function toUpperSnakeCase(str) {
    // Replace spaces with underscores and convert to uppercase
    return str.replace(/\s+/g, "_").toUpperCase();
}

// Example usage:
console.log(toUpperSnakeCase("hello there"));         // Output: "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings"));   // Output: "LORD_OF_THE_RINGS"
console.log(toUpperSnakeCase("javascript is fun"));   // Output: "JAVASCRIPT_IS_FUN"

/**
Explanation:

str.replace(/\s+/g, "_") replaces all whitespace (spaces, tabs, etc.) with underscores.

.toUpperCase() converts the resulting string to uppercase letters.

The function returns the final string in UPPER_SNAKE_CASE
*/

