const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Breakdown
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// (maximum - minimum + 1) calculates the range of numbers which is 100 - 1 + 1 = 100.
// Multiplying Math.random() by (maximum - minimum + 1) scales the random decimal to a range of 0 (inclusive) to 100 (exclusive).
// The Math.floor() rounds down the number to the nearest whole number, giving us an integer between 0 and 99.
// Adding minimum (which is 1) shifts the range from 0-99 to 1-100.
