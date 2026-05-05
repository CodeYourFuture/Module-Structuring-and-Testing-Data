const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// This code generates a random number between 1 and 100 (inclusive of 100).
// Math.random() produces a pseudo-random number greater than or equal to 0 and less than 1.
// That number is multiplied by the total count of possible values we want, in this case 100.
// The + 1 in (maximum - minimum + 1) ensures that 100 is one of the possible values of num.
// the + minimum at the end makes 1 the lowest value possible.
