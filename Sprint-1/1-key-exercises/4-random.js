const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing



// The num represents a random number between 1 and 100
// Math.random() generates a decimal from 0 to 1
// (maximum - minimum + 1) sets the range. For example, 100 - 1 + 1 = 100, so the range ends up being 100
// Math.floor() rounds a decimal down to the nearest whole number, ensuring a result between 0 and 99