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

// Answer:

// Requirements:
// 1. Replace spaces with underscores (_)
// 2. Convert all letters to uppercase

// We will call the function toUpperSnakeCase().
// We'll use the .replace() method to replace all spaces with underscores.
// We'll use .toUpperCase() to convert all letters to uppercase.
// The /g flag in the regular expression ensures that all spaces in the string are matched and replaced,
// not just the first one. Without /g, only the first space would be replaced.


function toUpperSnakeCase(str) {
  return str.replace(/ /g, '_').toUpperCase();
}

// Example usage:

console.log(toUpperSnakeCase("hello there"));           // Output: "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings"));     // Output: "LORD_OF_THE_RINGS"
console.log(toUpperSnakeCase("all upper case"));        // Output: "ALL_UPPER_CASE"
