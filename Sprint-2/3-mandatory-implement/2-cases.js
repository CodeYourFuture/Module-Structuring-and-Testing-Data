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
1.Split the String by comma to get the separate words
2.Join the separate words by _ to convert the string into snake case
3. uppercase all the letters in the string using toUpperCase Method in Javascript
*/
function upperSnakeCase(myString) {
  return myString.split(" ").join("_").toUpperCase();
}

console.log(upperSnakeCase("My name is Mehroz"));
