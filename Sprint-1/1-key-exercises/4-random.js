const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num is a variable used to store the random integer between 1 and 100.
// The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// The expression (maximum - minimum + 1) calculates the range of numbers we want to generate, which is 100 - 1 + 1 = 100.
// The Math.floor() function rounds down the result to the nearest whole number.
// Finally, we add the minimum value (1) to ensure that the random number falls within the desired range of 1 to 100.

console.log(num);
