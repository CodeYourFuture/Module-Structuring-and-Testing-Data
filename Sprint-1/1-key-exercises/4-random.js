const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// The variable num stores a random whole number between 1 and 100. The code uses Math.random() to get a number between 0 and 1. It then multiplies that number to get a value between 0 and 100. Math.floor() rounds it down to a whole number. Finally, it adds 1 so the result is between 1 and 100. Each time you run the code, num will be a different number in that range.