const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() generates a random decimal number from 0 to less than 1
// Math.floor() rounds down to the nearest whole number
// maximum-minimum+1 gives 100
// Math.random() * (maximum - minimum + 1) gives a random decimal number between 0 and less than 100, and Math.floor() rounds it down to the nearest integer to give a range of 0 to 99, and by adding minimum 1 to it, num is a random integer between 1 and 100 inclusive
