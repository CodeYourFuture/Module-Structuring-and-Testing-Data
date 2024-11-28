const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log("generated random number:" , num);
//Explain the random() function and its purpose: The random() function in JavaScript generates a random number between 0 (inclusive) and 1 (exclusive). By itself, it’s not sufficient to produce a number within a specific range, which is why you need to adjust it to fit a defined range.
//This part defines the range within which the random number should fall.
//	Add a comment about Math.floor(...) + minimum: This part rounds down to the nearest integer and adds minimum to ensure the random number falls between minimum and maximum.


