// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"
const sentence2 = "The quick brown fox jumps over the lazy dog.";

console.log(sentence2.toUpperCase().replace(/\./g, "_").replace(/ /g, "_"));
// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
