const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// num is a random integer between 1 and 100 (inclusive).
// Math.random() returns a decimal in the range [0, 1).
// Multiplying by (maximum - minimum + 1) scales it to the size of the range.
// Math.floor(...) converts it to an integer.
// Adding minimum shifts the range to start at 1 instead of 0.