const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer:
// The variable num represents a randomly generated whole number between 1 and 100 (inclusive).Since minimum is 1 and maximum is 100, we generate a random number within this range using Math.random(). This function produces a decimal between 0 and 1, which we scale to the desired range.Math.floor() rounds the result down to the nearest whole number, ensuring we get an integer.Each time the code runs, num will hold a different random integer between 1 and 100.