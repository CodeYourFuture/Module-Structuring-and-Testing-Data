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

// Declare a function called toUpperSnakeCase with named parameter inputString

function toUpperSnakeCase(inputString) {
    // Convert the input string to uppercase
    const upperCaseString = inputString.toUpperCase();
    // Replace spaces with underscores
    const snakeCaseString = upperCaseString.replace(/ /g, '_');
    return snakeCaseString;
}

// Call the function with different inputs to check it works
console.log(toUpperSnakeCase("hello there")); // Output: "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings")); // Output: "LORD_OF_THE_RINGS"
console.log(toUpperSnakeCase("javascript is fun")); // Output: "JAVASCRIPT_IS_FUN"
console.log(toUpperSnakeCase("test case")); // Output: "TEST_CASE"
console.log(toUpperSnakeCase("multiple words here")); // Output: "MULTIPLE_WORDS_HERE"

//can also test with edge cases
console.log(toUpperSnakeCase("")); // Output: ""
console.log(toUpperSnakeCase("singleword")); // Output: "SINGLEWORD"
console.log(toUpperSnakeCase("   leading and trailing spaces   ")); // Output: "___LEADING_AND_TRAILING_SPACES___"  

// Alternative solution using replaceAll method
function toUpperSnakeCase(str) {
  return str.toUpperCase().replaceAll(" ", "_");
}

// Differences between the two methods:
// 1. The first method uses a regular expression with the replace method
//  to replace all spaces, while the second method uses the replaceAll 
// method which is more straightforward for this specific case.
// Regex is a more complex tool that can be used for more advanced
// string manipulation and "replaces all matches globally", while the 
// replaceAll methods is simpler and more efficient for replacing all 
// occurrences of a specific substring.
// 2. The replaceAll method is a newer addition to JavaScript and may 
// not be supported in older environments, while the replace method 
// with a regular expression is widely supported.