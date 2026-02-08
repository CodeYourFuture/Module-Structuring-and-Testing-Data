const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // num generates a random whole number between minimum and maximum

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Below I will be breaking down the expression: const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// First you will need to generate a random decimal number between 0 and 1
const decimal = Math.random();

// Then calculate the range size
const range = maximum - minimum + 1;

// Then scale the decimal to the range
const scaled = decimal * range;

// Then round down to get a whole number
const floored = Math.floor(scaled);

// Then shift the number up to start at the minimum
const result = floored + minimum;

// You can log each part to understand the process
console.log("decimal:", decimal);
console.log("range:", range);
console.log("scaled:", scaled);
console.log("floored:", floored);
console.log("result:", result);
