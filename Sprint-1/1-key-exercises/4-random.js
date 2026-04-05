const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//ANSWER
// const minimum = 1 sets the minimum value to 1
// const maximum = 100 sets the maximum value to 100
//Math.random() generates a random decimal number, zero inclusive but not 1.
// (maximum - minimum + 1) calculates how many whole numbers maximum  and minimum
// Math.random() * (maximum - minimum + 1) ensures that the random decimal is within  the desired range.
// Math.floor(...) rounds the number down to the nearest whole integer
// + minimum shifts the range upward so it starts at minimum instead of 0
// The program generated random numbers from 0 to 100 as whole integers.
