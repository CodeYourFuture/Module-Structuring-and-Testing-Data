const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(`The random number is: ${num}`);
// The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying this by (maximum - minimum + 1) scales the range to the desired interval.
// Adding minimum shifts the range to start from the minimum value.
// The final result is a random integer between minimum and maximum, inclusive.
// The expression ensures that the random number is always within the specified range of 1 to   // 100, inclusive of both endpoints.
// The use of Math.floor() rounds down the result to the nearest whole number, ensuring that
// the final value is an integer.
// The final value of num will be a random integer between 1 and 100, inclusive.
