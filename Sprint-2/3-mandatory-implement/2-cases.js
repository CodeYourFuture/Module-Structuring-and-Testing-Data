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

function convertToUpperSnakeCase(inputString) {
    // we need to find everywhere the character space is and replace it with an underscore
    // we need to convert the string from lowercase to uppercase
    const oldCharacterSpace = " ";
    const newCharacterUnderscore = "_";
    const findspaceAndReplace = inputString.replaceAll(oldCharacterSpace, newCharacterUnderscore);
    const convertToUpperCase = findspaceAndReplace.toUpperCase();
    return convertToUpperCase;
}

const actualOutput = convertToUpperSnakeCase("how are you Tolu");
console.log(actualOutput); 