const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

// Try breaking down the expression and using documentation to explain what it means

The expression Math.floor() rounds a number down to the nearest integer.
The expression Math.random() generates a random floating-point number between 0 and 1.
The expression (maximum - minimum + 1) calculates the range of numbers between the minimum and maximum values.
The expression Math.random() * (maximum - minimum + 1) generates a random floating-point number between 0 and the range of numbers.
The expression Math.floor(Math.random() * (maximum - minimum + 1)) rounds that random number down to the nearest integer, resulting in a random integer between 0 and the range of numbers.
Finally, adding minimum to that result shifts the range to be between the minimum and maximum values.
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

