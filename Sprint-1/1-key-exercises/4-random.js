const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

Answer:

//num is a random number between 1 and 100.

//Math.random() makes a number between 0 and 1.

//times (maximum - minimum + 1) makes it bigger.

//Math.floor cuts off the decimal.

//+ minimum makes sure the random number starts at 1 instead of 0

