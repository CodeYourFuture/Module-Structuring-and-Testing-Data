const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.floor - Rounds a number DOWN to the nearest integer
// Math.random - generates a random floating number > 0 and < 1
// (maximum - minimum + 1) = 100 - 1 + 1 = 100
// So, num represents a rounded down random integer generated between 1 and 100 + 1

console.log(num);