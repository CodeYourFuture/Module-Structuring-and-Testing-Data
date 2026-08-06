const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// num stores a random whole number in the interval [1, 100].
// Math.random() generates a random decimal in the interval [0, 1).
// Math.floor() rounds the number down to the nearest whole number.
// Adding minimum ensures the final result is in the interval [1, 100].

console.log(num);
