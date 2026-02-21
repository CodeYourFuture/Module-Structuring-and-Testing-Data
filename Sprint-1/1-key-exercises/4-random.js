const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
// Answer: The variable `num` represents a random whole number between 1 and 100 (inclusive).
// Breakdown of the expression:
// 1. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// 2. (maximum - minimum + 1) calculates the total number of possible integers in our range (which is 100).
// 3. Multiplying them scales the random decimal to be between 0 and 99.999...
// 4. Math.floor() rounds that decimal down to the nearest whole number (getting an integer from 0 to 99).
// 5. Finally, '+ minimum' shifts the starting point up by 1, resulting in a final integer from 1 to 100.