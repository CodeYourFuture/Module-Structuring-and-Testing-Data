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

/*
Firstly declare a function strToUpperSnakeCase() that takes a placeholder argument of "str". Next, in the function declare the variable strToUpperCase that changes all characters of the string input to capital letters. Then declare a variable strToSnakeCase that will take the value of strToUpperCase and then use the method replaceAll() on it, so that instances of " " (the spaces between the words) will all be replaced with "_". Next, return that strToSnakeCase variable. Finally, console.log() (print)the function with a string input of your choice.
*/

// function strToUpperSnakeCase(str) {
//   const strToUpperCase = str.toUpperCase();
//   const strToSnakeCase = strToUpperCase.replaceAll(" ", "_");
//   return strToSnakeCase;;
// }

/*
 This can also be refactored by chaining the methods directly to the "str" input therefore eliminating the need for variables:
 */

function strToUpperSnakeCase(str) {
  return str.toUpperCase().replaceAll(" ", "_");
}

console.log(strToUpperSnakeCase("hello there"));
console.log(strToUpperSnakeCase("lord of the rings"));
