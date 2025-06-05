// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// Store the original phrase
const phrase = "lord of the rings";

// Define a function that converts the phrase to UPPER_SNAKE_CASE
function upperSnakePhrase(phrase) {
  // Convert the phrase to uppercase, then replace all spaces with underscores
  return phrase.toUpperCase().replace(/ /g, "_");
}

// Print the original phrase and the converted UPPER_SNAKE_CASE version
console.log(
  `Phrase "${phrase}" in UPPER_SNAKE_CASE will be ${upperSnakePhrase(phrase)}`
);

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
