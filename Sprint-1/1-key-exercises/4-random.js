const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// num stores a random whole number between 1 and 100.
// Math.random() generates a random decimal between 0 and 1.
// Math.floor() rounds the number down to the nearest whole number.
// Adding minimum ensures the final result is between 1 and 100.
console.log(num);
