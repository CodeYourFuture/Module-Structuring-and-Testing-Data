const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// num is a random number multiplied by the maximum number(100) plus 1. It is then rounded down to the nearest whole number using Math.floor. This means that num will be a random integer between 1 and 100, inclusive.
