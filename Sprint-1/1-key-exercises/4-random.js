const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// This script generates a random number between 1 and 100. 
//Math.random gives a random decimal number between 0 and 1
//Math.random() * (maximum - minimum + 1)multiplies random number by the size of the range 
//Math.floor rounds number down to the nerest integer 
// + minimun adds 1 changing the range from 0-99 to 1-100