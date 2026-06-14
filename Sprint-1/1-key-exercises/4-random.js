const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num will spit out a random integer between 1-100 inclusive.
//we start with a random number that is multiplied by 100 (maximum - minimum + 1) to generate random numbers up to 100 but these will be decimal numbers
//floor rounds this number down to the nearest integer, so technically the range will be from 0 to 99.
// then we add the minimum which is 1, so the range will shift to 1-100 inclusive
