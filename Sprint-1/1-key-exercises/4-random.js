const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)

//Explenation:

// Math.random - generates a random number (could be anything like: 0,1-0,750 etc in the range from 0(inclusive) to 1 (exclusive));
// Math.floar - rounds the number to the closest integer;
// Consequently, given expression on line 4 gives us a random round number in the range from minimum to maximum.