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


function toUpperSnakeCase(string) {
    return string.split(" ").join("_").toUpperCase();
}

console.log(toUpperSnakeCase("Hello World"));
console.assert(toUpperSnakeCase("Hello World") === "HELLO_WORLD", "Test Case 1 Failed");
console.assert(toUpperSnakeCase("hello world") === "HELLO_WORLD", "Test Case 2 Failed");
console.assert(toUpperSnakeCase("My name is Pooriya") === "MY_NAME_IS_POORIYA", "Test Case 3 Failed");
console.assert(toUpperSnakeCase("singleword") === "SINGLEWORD", "Test Case 4 Failed");
console.assert(toUpperSnakeCase("UPPER CASE") === "UPPER_CASE", "Test Case 5 Failed");
console.assert(toUpperSnakeCase("") === "", "Test Case 6 Failed");