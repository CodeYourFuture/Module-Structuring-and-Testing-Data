const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);

//Math.random():
// Produces a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Example output: 0.234, 0.879, etc.
// Math.random() * (maximum - minimum + 1):

// Scales the random number to a range from 0 to (maximum - minimum + 1).
// For example, if minimum = 1 and maximum = 100, the range becomes 0 to 100.
// Math.floor():

// Removes the decimal part of the scaled random number, effectively flooring it to the nearest integer.
// This ensures the result is an integer.
// + minimum:

// Shifts the range from 0 to (maximum - minimum + 1) to minimum to maximum.
// This adds the minimum value to the result, ensuring the random number is within the desired range.
// Why (maximum - minimum + 1)?
// Adding 1 ensures that the upper bound (maximum) is included in the range. Without the +1, the random number would only go up to maximum - 1.