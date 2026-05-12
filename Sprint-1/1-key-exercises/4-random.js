const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// get the maximum minus minimum
// add 1 to count the edges and avoid the fencepost error
// this generates the correct span
// add the minimum on so it starts at the right number
// multiply it by a random decimal between 0 and 1 
// round it down to the next whole number down
