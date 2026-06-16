const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
console.log(Math.random())
console.log(num);
// Try breaking down the expression and using documentation to explain what it means

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// num = Math.floor which will remove all the numbers after the decimal point 
// (Math.random that will generate a random decimal number 
// which will be times with the value of maximum - minimum + 1 + minimum ) 
// which is 100 * the Math.random generated
