const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Breaking down:
//Math.random() is a function that gives a decimal number between 0 and 1, but neither 0 nor 1
//then multiples it by (maximum-minimum+1)
//function Math.floor() gives the nearest integer  of the previous line
//num equals the addition of the nearest integer and minimum
//so num is a random integer between minimum and maximum
console.log(` a random number between ${minimum} and ${maximum} is: ${num}`);

