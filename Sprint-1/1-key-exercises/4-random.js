const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// (maximum - minimum + 1) evaluates to 100.
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Multiplying by 100 produces a number between 0 (inclusive) and 100 (exclusive).
// Math.floor() rounds the result down to an integer, giving a value between 0 and 99.
// Adding minimum (1) shifts the range to 1–100.
// Therefore, num represents a random integer between 1 and 100, including both 1 and 100.