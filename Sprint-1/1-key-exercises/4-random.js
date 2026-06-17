const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answers
// num represents a random integer between 1 and 100, inclusive.
// Math.floor() rounds down to the nearest integer. 
// Math.random() generates a random decimal number between 0 and 1 but not including 1.
// maximum - minimum + 1 helps to keep both end of the range 1 to 100 after multiplying by Math.random()
// + minimum shifts the range up to start at 1 instead of 0 