const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// random integer between 1 and 100 (inclusive)

// Try breaking down the expression and using documentation to explain what it means

// Math.random(): generate a random decimal number between 0 and 1
//(maximum - minimum + 1): calculate range of numbers 100 -1 +1 = within 100
//Math.floor(): decimal => integer  between 0 and 99
// + minimum: to shift the range from 0 - 99 to 1 - 100

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
