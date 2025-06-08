const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// This code generates a random number between 1 and 100, inclusive.
// The Math.random() function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// The expression (maximum - minimum + 1) calculates the range of numbers we want to include.
// By multiplying Math.random() by this range, we scale the random number to fit within the desired range.
// The Math.floor() function rounds down the result to the nearest whole number.
// Finally, we add the minimum value to ensure the result starts from the minimum value.