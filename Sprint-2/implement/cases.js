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

// Function to convert string to UPPER_SNAKE_CASE
function toUpperSnakeCase(inputString) {
    // Step 1: Split the string by spaces into an array of words
    const wordsArray = inputString.split(' ');
  
    // Step 2: Convert each word to uppercase
    const upperCaseWords = wordsArray.map(word => word.toUpperCase());
  
    // Step 3: Join the array of words with underscores
    const result = upperCaseWords.join('_');
  
    // Step 4: Return the result
    return result;
  }
  
  // Test cases
  console.log(toUpperSnakeCase("hello there")); // Expected output: "HELLO_THERE"
  console.log(toUpperSnakeCase("lord of the rings")); // Expected output: "LORD_OF_THE_RINGS"
  console.log(toUpperSnakeCase("java script is awesome")); // Expected output: "JAVA_SCRIPT_IS_AWESOME"
  