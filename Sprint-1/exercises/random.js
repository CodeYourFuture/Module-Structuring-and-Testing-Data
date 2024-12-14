const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// *** Answer : This will generate a random number (num) between minimum and maximum inclusive.

// Try breaking down the expression and using documentation to explain what it means
// *** Answer : Math.random() will make a random number between [0,1]. The (maximum-minimum+1) part will ensure that both min and max are included in the range.Math.floor() is applied to round down to an integer.

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing