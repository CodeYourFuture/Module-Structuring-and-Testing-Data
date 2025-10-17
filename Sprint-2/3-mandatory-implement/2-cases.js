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
  // Step 1: convert the string to uppercase
  let upperStr = str.toUpperCase();

  // Step 2: replace spaces with underscores
  let snakeCaseStr = upperStr.replace(/ /g, "_");

  // Step 3: return the result
  return snakeCaseStr;
}

console.log(toUpperSnakeCase("hello there"));
console.log(toUpperSnakeCase("lord of the rings"));
console.log(toUpperSnakeCase("javascript is fun"));
