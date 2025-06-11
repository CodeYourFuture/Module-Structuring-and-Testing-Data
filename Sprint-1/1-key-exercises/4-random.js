const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// 1. Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive)
// 2. Multiply by (maximum - minimum + 1) to scale to the desired range size
// 3. Math.floor() rounds down to get an integer from 0 up to range size minus 1
// 4. Adding minimum shifts the range so the lowest number is minimum, not zero
const num = 
Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Result: num is a random integer between minimum and maximum, inclusive
console.log(num);