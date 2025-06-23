const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
Math.random() means it can generates a random decimal number between 0 and 1
Math.random() * (maximum - minimum + 1)  this means the random decimal number will be multiplied by the range difference between maximum and minimum plus 1
For minimum = 1 and maximum = 100, the range size is 100 - 1 + 1 = 100,
Math.floor() rounds down to the nearest whole number
+ minimum shifts the entire range up, by the minimum value 1 and not 0