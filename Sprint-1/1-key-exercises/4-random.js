const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// Math.floor()= rounds a number down to the nearest integer
// Math.random() = generates a random float number between 0 and 1 (not including 1)
// Math.random() * 100 = generates a random float number between 0 and 99.999...
// (maximum - minimum + 1) -> scales the range of random numbers to be between the minimum and maximum values (including the maximum value)
// + minimum -> shifts the range of random numbers to start from the minimum value instead of 0
// So, the expression generates a random integer between the minimum and maximum values (inclusive)
// num = a random integer between 1 and 100 (including 100)

