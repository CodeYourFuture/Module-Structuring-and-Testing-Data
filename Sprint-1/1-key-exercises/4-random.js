const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num); // Will output numbers like: 5, 42, 87, 100, etc.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
// Examples: 0.1, 0.5, 0.99
// (maximum - minimum + 1) calculates the range size
// 100 - 1 + 1 = 100
// Math.random() * 100 creates numbers from 0 to 99.999...
// Examples: 0.1 × 100 = 10, 0.5 × 100 = 50, 0.99 × 100 = 99
// Math.floor() rounds down to the nearest integer
// Results in integers from 0 to 99
// + minimum shifts the range
// Adds 1 to move from 0-99 to 1-100
// The expression generates a random integer between the minimum value (1) and the maximum value (100), inclusive of both endpoints.
// Final Answer: num is a random integer from 1 to 100