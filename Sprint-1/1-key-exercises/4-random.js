const minimum = 1; // Minimum value for the random number
const maximum = 100; // maximum value for the random number

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// num is a random integer between 1 and 100, inclusive. 
// Math.floor rounds down the result of Math.random()
// * (maximum - minimum + 1) + minimum ensures the number is within the specified range.
console.log(`The random number is ${num}`);


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
