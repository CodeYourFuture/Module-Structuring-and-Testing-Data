const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// The variable num represents a random integer between minimum and maximum.
// That is, it can be any integer from 1 to 100, inclusive.
// The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// The expression Math.random() * (maximum - minimum + 1) scales this number to the range of 0 to 100.
// The Math.floor() function rounds down the result to the nearest whole number, giving a range of 0 to 99.
// Finally, adding minimum shifts the range to 1 to 100.

console.log(num); // Output: A random integer between 1 and 100
