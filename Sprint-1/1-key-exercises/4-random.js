const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// This code generates a random whole number between 1 and 100.
// It starts with a random decimal, multiplies it to get the right range, and chops off the decimals to make it a whole number.
// Then it adds the minimum to make sure the count starts at 1.


console.log("The magic number is: " + num);