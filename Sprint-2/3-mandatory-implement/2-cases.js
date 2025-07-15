// This function converts any sentence into UPPER_SNAKE_CASE
function toUpperSnakeCase(input) {
  // Step 1: Convert the string to uppercase
  const upperCase = input.toUpperCase();

  // Step 2: Replace all spaces with underscores
  const snakeCase = upperCase.replace(/ /g, "_");

  // Step 3: Return the result
  return snakeCase;
}

// Example usage:
console.log(toUpperSnakeCase("hello there"));          // Output: "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings"));    // Output: "LORD_OF_THE_RINGS"
