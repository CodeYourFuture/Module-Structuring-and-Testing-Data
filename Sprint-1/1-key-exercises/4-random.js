const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means

//num is a random number between 1 and 100 

// Method.floor generates a random number between 0 and 1 to nearest interger (whole number)
//Math.random generates a decimal number between 0 and 1 .

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
