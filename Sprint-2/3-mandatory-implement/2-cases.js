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

function toUpperSnakeCase(input) {
    const upperSnake = input.split(' ').join('_').toUpperCase();
    return upperSnake;
  }
  
 console.log(toUpperSnakeCase("I always enjoy the class at CYF on Saturdays"));
  // Expected output: "I_ALWAYS_ENJOY_THE_CLASS_AT_CYF_ON_SATURDAYS
  
// This is what I did.
// I wrote a function called toUpperSnakeCase that takes a sentence and turns it into UPPER_SNAKE_CASE.
// Inside the function, I:
// Split the string into words using .split(' ')
// Joined the words with underscores using .join('_')
// Changed all letters to uppercase using .toUpperCase()
// Stored the result in a const variable called upperSnake
// Returned that final result
// Then I tested the function with the sentence:
// "I enjoy the class at CYF on Saturdays",
// and it returned: "I_ENJOY_THE_CLASS_AT_CYF_ON_SATURDAYS"

