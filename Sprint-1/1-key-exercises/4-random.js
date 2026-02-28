const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Math.floor https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// mdn order of operations javascript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Math.random() generates a decimal number greater than or equal to 0
// and less than 1 (0 <= n < 1).
// Multiplying by 100 gives a number from 0 up to (but not including) 100.
// Math.floor() rounds this down to a whole number from 0 to 99.
// Adding 1 shifts the range to 1–100 inclusive.
