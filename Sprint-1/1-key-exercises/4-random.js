const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
Martin answer - num is a random integer between minimum and maximum. Math.random() generates a decimal between (0,1), which is rounded down to the nearest integer by the Math.floor method.  After multiplication the range is scaled up. Math.random is generating a random number up to 100 - 
Math.floor(Math.random() * (maximum - minimum + 1)  →  [0, 100))
Adding minimum shifts the range up by 1 and the maximum number is now included in the range [mimimum, maximum] eg [1, 100]
*/
