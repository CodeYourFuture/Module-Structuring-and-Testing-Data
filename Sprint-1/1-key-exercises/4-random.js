const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//num becomes A random whole number between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() creates a random decimal number.
// The number will always be between 0 and 1, but it will never actually reach 1.

// Math.floor() rounds down the decimal number that is created after
// Math.random() is multiplied by the range.