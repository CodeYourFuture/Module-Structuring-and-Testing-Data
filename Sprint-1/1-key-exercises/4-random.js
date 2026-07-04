const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() gives a random decimal number between 0 and 1
// Math.random() * (maximum - minimum + 1) gives a random decimal number between 0 and 100
// Math.floor() removes the decimal part, giving a whole number between 0 and 99
// + minimum shifts the range up so the final result is between 1 and 100
