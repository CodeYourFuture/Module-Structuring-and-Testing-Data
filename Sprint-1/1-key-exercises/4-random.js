const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


/*
num stores a random integer between minimum (1) and maximum (100), inclusive.

Breakdown:
1. Math.random() generates a decimal number between 0 (inclusive) and 1 (exclusive).
2. Multiplying by (maximum - minimum + 1) scales the range to 0–100.
3. Math.floor() removes the decimal part, producing integers from 0–99.
4. Adding minimum shifts the range to 1–100.
*/
console.log(num);
