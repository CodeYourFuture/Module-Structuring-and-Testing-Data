const minimum = 1;
const maximum = 100;

// Calculate how many numbers we can pick
const valueRange = maximum - minimum + 1;
// Get a random number and make it fit our range
const scaledRandomNumber = Math.random() * (valueRange);
// Round the random number down to the nearest whole number
const roundedDownValue = Math.floor(scaledRandomNumber);
//Add the smallest number to the rounded number to get the final number
const num = roundedDownValue + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
