const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// Math.random() → Generates a random decimal between 0 and 1. This function generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Math.random() * (maximum - minimum + 1)
// This multiplies the random decimal number by the range (maximum - minimum + 1).

// In this case:
// maximum - minimum + 1 = 100 - 1 + 1 = 100

// Now, the random number is scaled to be between 0 and 100. or 
// Math.random() * 100 → Scales the number to be between 0 and 100
// Math.floor() → Rounds it down to the nearest integer.
// + minimum → Adjusts the range to start at 1 and go up to 100.