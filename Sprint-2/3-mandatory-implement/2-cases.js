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

function upperSnakeCase(inputString) {
    // Convert the input string to uppercase and replace spaces with underscores
    return inputString.toUpperCase().replace(/ /g, '_');
}
console.log(upperSnakeCase("hello there")); // Output: "HELLO_THERE"
console.log(upperSnakeCase("lord of the rings")); // Output: "LORD_OF_THE_RINGS"
console.log(upperSnakeCase("this is a test")); // Output: "THIS_IS_A_TEST"
console.log(upperSnakeCase("javascript is fun")); // Output: "JAVASCRIPT_IS_FUN"