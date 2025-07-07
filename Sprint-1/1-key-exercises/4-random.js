const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// Math.random() returns a decimal number in the range [0, 1).
// Multiplying it by (maximum - minimum + 1) scales it to the desired range size.
// Math.floor() ensures we get an integer.
// Adding minimum shifts the result to start from the minimum value.
// This whole expression returns a random integer between minimum and maximum (inclusive).

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
