const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//num represents a random whole number between 1 and 100 (inclusive).
//Math.random(): This generates a random decimal number between 0 (inclusive) and 1 (exclusive). So, it could be something like 0.23, 0.89, etc.

//Math.random() * (maximum - minimum + 1): This scales the random number to be between 0 and 100 (because maximum - minimum + 1 = 100). So, it could give a result like 23.5 or 89.7.

//Math.floor(): This function rounds down the number to the nearest whole number. So 23.5 becomes 23 or 89.7 becomes 89.

//+ minimum: Finally, it adds 1 (the minimum) to ensure the number starts at 1. So, Math.floor(Math.random() * 100) gives a number from 0 to 99, and adding 1 ensures the range is from 1 to 100.

//Result: num will be a random integer between 1 and 100 each time you run the code.