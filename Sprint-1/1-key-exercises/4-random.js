const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// Here, Math.random creates a random decimal number greater than or equals to 0 and less than 1. It can be any decimal number in between.
// The function Math.floor rounds down any decimal number to the nearest integer to give it a whole number.
//In Javascript, the the expression in the bracket is read first. Here, we started by doing (maximum - minimum + 1) which is (100 - 1 + 1). The answer is 100.
// The next evaluation is creating a random number by reading the function Math.random(0<= random number < 1), we will multiply it by the result of (100 - 1 + 1 which is 100), then round it down to the nearest integer
// Then add all of that to 1 which is the minimum number.
