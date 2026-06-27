const minimum = 3;
const maximum = 50;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// the num is random number between 1 and 100.
// Try breaking down the expression and using documentation to explain what it means
// const minimum is a function expression
// = 1 is a minimum value assigned by the operator for the minimum 
// = 100  is the maximum value assigned by the operator for the function.

// Method.floor generates a random number between 0 and 1 to nearest interger (whole number)
//Math.random generates a decimal number between 0 and 1 .

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
// I noticed that the different values change the print result .