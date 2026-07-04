const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// num represents a random number between minimum and maximum.
// Math.random() generates a random number , and Math.floor() rounds it down to a whole number.
// Expression (maximum-minimum+1) gives the range of numbers between minimum and maximum.
// On the final line, on the random number will add the minimum value , and that's ensure that the random number is always between minimum and maximum.