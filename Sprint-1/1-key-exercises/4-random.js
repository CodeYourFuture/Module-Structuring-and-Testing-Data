const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num is a random whole number between the values of minimum and maximum inclusive
// meaning it could be equal to minimum, maximum or any number in between

// if i break it down Math.random() generates a random floating number between 0 - 1 for example (0.595)
// (maximum - minimum + 1) represents the values passed for example (100 - 1 + 1)
// + minimum = +Add the value of minimum
//Math.floor rounds a number down to the nearest whole number
