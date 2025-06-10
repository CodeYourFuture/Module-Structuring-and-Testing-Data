const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// This code generates a random whole number between 1 and 100.
// Math.random() returns a decimal between 0 and 1 (not including 1).
// We multiply it by 100 to get a number between 0 and 99.999...
// Math.floor() removes the decimal part, so we get an integer.
// We add 1 to shift the range to 1–100 instead of 0–99.
