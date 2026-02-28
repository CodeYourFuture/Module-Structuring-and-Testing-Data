const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Answer: num choose a random number between 0 and 100 and adds 1 to it so that the number is between 1 and 100 instead of 0 and 99

// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);