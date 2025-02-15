const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Here, Math.rondom creates a random number between 0 to 1 and Math.floor rounds donw to the nearest integer. 
// When creating a random number between 0 and 1, we will multiply it by the (100 - 1 + 1), then round it down to the nearest integer
// Then add all of that to 1.

