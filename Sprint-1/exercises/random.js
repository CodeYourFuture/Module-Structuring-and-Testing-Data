const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// num is the variable name.
// The Math.floor() method is used to round down to the nearest whole number.
// The Math.random() method is used to return a random decimal number between number 0 and 1.
// maximum - minimum + 1 = 100.
// Math.random() * 100 means multiplying the random decimal number between 0 and 1 with a 100 e.g. 0.235145 * 100 = 23.5145.
// Encapsulating the expression minus "+ minimum" with Math.floor() will round the number e.g 23.5145 = 23.
// This means that it will output a number between 0 and 99.
// By adding minimum at the end you will shift the range of the random number to between 1 and 100.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing