const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// num represents a random integer in the range [1, 100].
// Breakdown:
// 1. Math.random() returns a decimal number in the range [0, 1).
// 2. (maximum - minimum + 1) calculates the size of the range, which is 100.
// 3. Math.random() * 100 gives a decimal in the range [0, 100).
// 4. Math.floor() rounds down to the nearest integer, giving a value in the range [0, 99].
// 5. Adding minimum (1) shifts the range to [1, 100].
