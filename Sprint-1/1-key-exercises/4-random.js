const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Math.random() returns a random number between 0 and 1 but not including 1. By multiplying by (maximum-minimum +1) we get a random number between 0 and 100. 
// The answer could however be in decimal point, thereofor by using Math.floor() we round down to the nearest whole number, but that would give us a range between 0 and 99. Adding minimum (1) to the result gives us a range between 1 and 100 inclusive.