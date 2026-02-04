const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// First, maximum - minimum + 1 is calculated, so 100 - 1 + 1 equals 100. 
// Then, a random fractional number between 0 and 1 is chosen(except 1), for example 0.3. 
// Next, Math.random() * 100 gives 30. 
// Math.floor rounds this number down to the nearest integer, and the final step adds 1, giving 31.