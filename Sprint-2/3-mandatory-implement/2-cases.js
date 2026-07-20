// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

function toUpperSnakeCase(input) {
  return input.toUpperCase().split(" ").join("_");
}


// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"
console.assert(
  toUpperSnakeCase("hello there") === "HELLO_THERE",
  '"hello there" should be "HELLO_THERE"'
);

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

console.assert(
  toUpperSnakeCase("lord of the rings") === "LORD_OF_THE_RINGS",
  '"lord of the rings" should be "LORD_OF_THE_RINGS"'
);

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

console.assert(
  toUpperSnakeCase("good morning") === "GOOD_MORNING",
  '"good morning" should be "GOOD_MORNING"'
);

// Single word, no spaces at all
console.assert(
  toUpperSnakeCase("single") === "SINGLE",
  '"single" should be "SINGLE"'
);

// Empty string
console.assert(
  toUpperSnakeCase("") === "",
  "empty string should stay empty"
);

// Already-uppercase input
console.assert(
  toUpperSnakeCase("already UPPER case") === "ALREADY_UPPER_CASE",
  '"already UPPER case" should be "ALREADY_UPPER_CASE"'
);

// Multiple consecutive spaces (each becomes its own underscore)
console.assert(
  toUpperSnakeCase("multiple   spaces") === "MULTIPLE___SPACES",
  '"multiple   spaces" should be "MULTIPLE___SPACES"'
);
