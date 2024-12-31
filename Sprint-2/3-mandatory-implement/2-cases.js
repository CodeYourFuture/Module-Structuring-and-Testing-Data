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

function convertToSnakeCase(stringInput) {
  return stringInput.toUpperCase().split(" ").join("_");
}

// .split( ' ' ) splits the string at each space and adds each element to an array
// "lord of the rings" will therefore become [ "lord", "of", "the", "rings" ]

// .map() will loop over each element in the array, and return the result of str.toUpperCase() to a new array.
// [ "lord", "of", "the", "rings" ] will therefore become [ "LORD", "OF", "THE", "RINGS" ]

// .join( '_' ) will convert the values in an array to a string, joining each element in the array with the value provided, in this case an underscore
// [ "LORD", "OF", "THE", "RINGS" ] will therefore become "LORD_OF_THE_RINGS"

console.assert(convertToSnakeCase("lord of the rings") === "LORD_OF_THE_RINGS");
