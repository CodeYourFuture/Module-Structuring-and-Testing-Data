const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// num is a  variable which stores a randomly generated integer between 1 and 100,produced by the expression:  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Try breaking down the expression and using documentation to explain what it means
// Math.floor() is a function that rounds a number down to ne nearest whole integer.
// Math.random() is a function that generates a random number between 0 and 1,excluding 1.
// num = Math.floor(Math.random() * (100 - 1 + 1+)) + 1;
// num = Math.floor(Math.random() * 100) + 1;


// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
