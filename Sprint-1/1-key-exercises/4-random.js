const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// Answer
// The expression generates a random integer between the minimum and maximum values (inclusive). 
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). 
// Multiplying this by (maximum - minimum + 1) scales it to the range of possible integers. 
// Adding minimum shifts the range to start from the minimum value. 
// Finally, Math.floor() rounds down to the nearest whole number, ensuring that num is an integer within the specified range.