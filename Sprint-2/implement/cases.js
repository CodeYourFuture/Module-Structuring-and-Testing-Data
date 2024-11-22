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

_____________________________________________SOLUTION____________________________________________

// Implementation for converting a string to UPPER_SNAKE_CASE:

/**
 * To Converts a given string to UPPER_SNAKE_CASE.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The converted string in UPPER_SNAKE_CASE.
 */
function toUpperSnakeCase(input) {
    if (typeof input !== "string") {
      throw new Error("Input must be a string.");
    }
  
    // Step 1: Replace spaces with underscores
    const withUnderscores = input.replace(/ /g, "_");
  
    // Step 2: Convert the string to uppercase
    const upperSnakeCase = withUnderscores.toUpperCase();
  
    return upperSnakeCase;
  }
  
  // Example usage:
  console.log(toUpperSnakeCase("hello there")); // Output: HELLO_THERE
  console.log(toUpperSnakeCase("lord of the rings")); // Output: LORD_OF_THE_RINGS
  console.log(toUpperSnakeCase("a b c d")); // Output: A_B_C_D
  

  // Explanation
  /*
  Input Validation:
  
  Ensure the input is a string. If it’s not, throw an error.
  Replacing Spaces:
  
  Use the .replace method with a regular expression / /g to find all spaces in the input string and replace them with underscores.
  Converting to Uppercase:
  
  Use .toUpperCase() to convert the entire string to uppercase.
  Return Result:
  
  Return the final string after transformations.
  */

  // Test Cases:

  console.log(toUpperSnakeCase("hello world")); // Output: HELLO_WORLD
console.log(toUpperSnakeCase("the quick brown fox")); // Output: THE_QUICK_BROWN_FOX
console.log(toUpperSnakeCase("snake_case is fun")); // Output: SNAKE_CASE_IS_FUN
console.log(toUpperSnakeCase("already_uppercase")); // Output: ALREADY_UPPERCASE
console.log(toUpperSnakeCase("UPPER case example")); // Output: UPPER_CASE_EXAMPLE

//  Edge Cases:

