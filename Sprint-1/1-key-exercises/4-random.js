const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(`Random number between ${minimum} and ${maximum}: ${num}`);


// In this exercise, you will need to work out what num represents? - generates a random integer between minimum and maximum by formula
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing - Each time run the program, num will be different, and it will always be between 1 and 100, inclusive. 
