const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer: Inermost brackets first (maximum - minimum + 1) this is calcuating the range
// Math.random generated a number between 0 and 1 but wont get to 1
// Math.random * 100 moved the comma by 2 decimal places
// Math.floor wii remove decimal parts of the number
// + minimum will add 1

console.log(num);