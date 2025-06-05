// A SET OF WORDS CAN BE GROUPED TOGETHER IN DIFFERENT CASES.

// FOR EXAMPLE, "HELLO THERE" IN SNAKE CASE WOULD BE WRITTEN "HELLO_THERE"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// IMPLEMENT A FUNCTION THAT:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

function toSnakeCase(str) {
    str = str.trim(); //remove any leading or trailing whitespace
    str = str.replace(/\s+/g," ") //replace any multiple-spaces with single spaces
    return (str.toUpperCase()).replaceAll(" ", "_");
}

myString = "I like beans";  // string to change to snake case
console.log(toSnakeCase(myString)); //calls toSnakeCase to print the string in snake case

myString2 = "I    like  beans";
console.log(toSnakeCase(myString2));
