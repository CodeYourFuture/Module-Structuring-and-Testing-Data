const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// answer
//MAth.floor() Rounds a floating-point number down to the nearest integer
// Math.random() Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// num first a random floating number is generated then multiplied by 100-1+1 then rounded to the lowest integer and lastly, 1 is added to it. In general it gives a random number between 1 and 100 inclusive.