const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// DOCUMENTATION
// 'num' - generates a random number within range between 'minimum' and 'maximum'.
// Math.floor() - rounds any number down to the nearest whole number.
// Math.random() - generates a random number between 0 and 0.9 recurring (never 1).
// '* (maximum - minimum + 1)' - Calculates range. '+ 1' means generated number can actually be <= range instead of just < range.
// '+ minimum' - totals the minimum and maximum to get the total range.

// Output
console.log(num);
