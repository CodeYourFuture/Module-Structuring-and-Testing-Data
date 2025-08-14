const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Explanation :
//Math.floor() function is used to round a number down to the nearest integer. 
// It always rounds a number down, regardless of the fractional part.
//The Math.random() function is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). 
//If we want to generate a random number between 0 and 100 we use Math.random() * 101
//By using Math.floor() we are dropping any decimal part of the number to keep only integers between 0 and 100
//maximum - minimum + 1 => maximum is 100 and minimum is 1, so:
//100 - 1 + 1 = 100
//The number num will be a random integer between 1 and 100 (inclusive).