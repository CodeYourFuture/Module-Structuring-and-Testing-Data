const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() returns a random decimal number between 0 and 1
// (maximum - minimum + 1) represents the size of range of numbers we want to include. We add +1 because both minim and maximum are included in the range
// Math.random() * (maximum - minimum + 1) gives us a random decimal between 0 and 100, but still decimal
// Math.floor() rounds down to the nearest whole number. So this. turns decimals like 99.9 into 99
// + minimum since minimum = 1, this shifts the entire random range up by 1. so instead of 0-100, the range becomes 1-100
// num should return a random integer between 1 and 100