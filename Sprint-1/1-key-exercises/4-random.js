const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// I understand that Math.random() generates a random number between 0 and 1, 
// and multiplies it by the range (maximum - minimum + 1) to get a number in that range.
// and then adds the minimum to shift the range to start from the minimum value 1 -> 100 rather than 0 -> 99.
// finally, Math.floor() rounds the number down.

// docs for Math.random() and Math.floor() I used:
// https://www.google.com/search?q=Math.random+mdn
// https://www.google.com/search?q=Math.floor+mdn
