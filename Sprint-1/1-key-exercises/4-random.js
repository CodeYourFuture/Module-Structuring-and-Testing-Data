const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // Generates a random whole number between minimum and maximum

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Generates a random decimal number in the interval [0, 1)
// (includes 0, excludes 1)
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const decimal = Math.random();
// Calculates the range size
const range = maximum - minimum + 1;
// Scales the decimal to the range
const scaled = decimal * range;
// Rounds down to get a whole number
const floored = Math.floor(scaled);
// Shifts the number up to start at the minimum
const result = floored + minimum;
// Logs each part to understand the process
console.log("decimal:", decimal);
console.log("range:", range);
console.log("scaled:", scaled);
console.log("floored:", floored);
console.log("result:", result);