const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answer: Firstly, a random number in the range [0, 1) is generated, meaning it is greater than or equal to 0 BUT less than 1. That number is multiplied by 100, always rounded down to the nearest whole number, and then the minimum value of 1 is added.
