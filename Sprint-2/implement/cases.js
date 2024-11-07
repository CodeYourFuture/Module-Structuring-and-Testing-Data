// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution

// Function to convert a string to UPPER_SNAKE_CASE
function toUpperSnakeCase(input) {
  // Replace spaces with underscores and convert to uppercase
  return input.replace(/ /g, "_").toUpperCase();
}

// Example usage
console.log(toUpperSnakeCase("hello there"));         // Expected output: "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings"));   // Expected output: "LORD_OF_THE_RINGS"