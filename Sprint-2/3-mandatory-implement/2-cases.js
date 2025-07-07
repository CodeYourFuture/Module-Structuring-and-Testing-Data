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

function toUpperSnakeCase(string) {
  //split the string into an array of words
  const wordsArray = string.split(" ");
  // Convert each word to uppercase
  const upperWordsArray = wordsArray.map((word) => word.toUpperCase());
  // Join the array back into a string with underscores
  const toUpperSnakeCase = upperWordsArray.join("_");
  // Return the string in UPPER_SNAKE_CASE
  return toUpperSnakeCase;
}
// Example usage for this function
// let string = "hello there";

// console.log(`The string in UPPER_SNAKE_CASE is: ${toUpperSnakeCase(string)}`);

console.log(
  `The string in UPPER_SNAKE_CASE for 'hello there' is: ${toUpperSnakeCase(
    "hello there"
  )}`
);

console.log(
  `The string in UPPER_SNAKE_CASE for 'lord of the rings' is: ${toUpperSnakeCase(
    "lord of the rings"
  )}`
);

console.log(
  `The string in UPPER_SNAKE_CASE for 'example usage for this function' is: ${toUpperSnakeCase(
    "example usage for this function"
  )}`
);
