const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

//represents a randomly generated integer between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Math.random() generates a random decimal number between 0 and 1 (excluding 1). (0<= X < 1)
//(maximum - minimum + 1):(100 - 1 + 1 = 100).
//Math.random() * 100 gives a random decimal between 0 and 99.9999.... 
//Math.floor(...) rounds the number down to the nearest whole number, making it between 0 and 99.For example 18,57,2 etc.
//+ minimum shifts the range up, making it between 1 and 100.Should not be 0.

console.log(num);
