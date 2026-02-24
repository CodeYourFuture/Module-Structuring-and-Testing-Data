// A set of words can be grouped together in different cases.
// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// I named the function 'toUpperSnakeCase'
function toUpperSnakeCase(text) {
  // 1. Replace all spaces " " with underscores "_"
  // 2. Convert the whole text to UPPERCASE
  return text.replaceAll(" ", "_").toUpperCase();
}

// === Let's test the function to see if it works! ===
console.log(toUpperSnakeCase("hello there"));
// It should print: HELLO_THERE

console.log(toUpperSnakeCase("lord of the rings"));
// It should print: LORD_OF_THE_RINGS
