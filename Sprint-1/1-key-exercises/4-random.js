const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
 

// num is a random integer between 1 and 100
// The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying this by (maximum - minimum + 1) scales the range to the desired size.
// Adding minimum shifts the range to start at the minimum value.