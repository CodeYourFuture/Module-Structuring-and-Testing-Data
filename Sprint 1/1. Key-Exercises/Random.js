const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//num is a random number between 1 and 100.
// Try breaking down the expression and using documentation to explain what it means
// Math,floor round number to nearest integer
// Math.random generates a random number.
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)