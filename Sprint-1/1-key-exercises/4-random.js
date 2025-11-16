// MIN and MAX are constants that define the lower and upper bounds for our random number range.
const MIN = 1;
const MAX = 10;

// Math.random() returns a decimal value in the interval [0, 1)
// Multiplying by (MAX - MIN + 1) scales the interval to [0, MAX - MIN + 1)
// Applying Math.floor() converts the value to an integer within [s0, MAX - MIN]
// Finally, adding MIN shifts the interval to [MIN, MAX], which is our desired result.

const num = MIN + Math.floor(Math.random() * (MAX - MIN + 1));
console.log(num);
