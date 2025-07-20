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
    // split the words by spaces
    const words = input.split(' ');
    // map each of the words to uppercase and join them with underscores
    const upperSnakeCase = words.map(word => word.toUpperCase()).join('_');
    return upperSnakeCase;
}

//test
console.log(toUpperSnakeCase("why do people run")); // "WHY_DO_PEOPLE_RUN"