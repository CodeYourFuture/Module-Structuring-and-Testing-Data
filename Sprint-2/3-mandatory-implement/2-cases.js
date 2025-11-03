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

function toUpperSnakeCase(str) {
  // return the string in UPPER_SNAKE_CASE
}

// Predict and explain first...
//  =============> write your prediction here
// I predict that the code will output 'undefined' because the function toUpperSnakeCase 
// does not currently return anything.

// =============> write your explanation here
// The function needs to replace spaces in the string with underscores ("_") 
// and then convert all the letters to uppercase.
// We can do this using string methods: 
// - replaceAll(" ", "_") (or replace(/ /g, "_") for older versions of JS)
// - toUpperCase() to convert to uppercase.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function toUpperSnakeCase(str) {
  return str.replaceAll(" ", "_").toUpperCase();
}

// Example:
console.log(toUpperSnakeCase("hello there"));       // Output: HELLO_THERE
console.log(toUpperSnakeCase("lord of the rings")); // Output: LORD_OF_THE_RINGS
