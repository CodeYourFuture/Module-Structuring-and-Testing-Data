const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer: The variable we have created 'num' generates a random number, this is done by using the Math.random() function
// The Math.Random is a built-in function that creates a random number between 0 and 1, but not including 1. The next part
// of the expression multiplies the random number by (100 - 1 + 1) which is 100, this means that the random number will be between 0 and 100.
// Then +1 minimum is added to the random number, this means that the random number will be between 1 and 100. Finally, the Math.floor() 
// function is used to round the random number down to the nearest whole number.
