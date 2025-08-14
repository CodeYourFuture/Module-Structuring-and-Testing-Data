const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* 

num represents a random number between 1 and 100.

Math.random() returns a random floating-point number between 0 and 1.
(maximum - minimum + 1) scales up the returned number to the range that you would like.
Math.floor() rounds down the number that you receive.
+ minimum is added to account for Math.random() giving a number BETWEEN 0 and 1 but not including 1.

*/