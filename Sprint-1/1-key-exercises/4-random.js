const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);


// num represents a random integer between 1 and 100 (inclusive).

// 1. Math.random() generates a random decimal in [0, 1)
// 2. (maximum - minimum + 1) = 100, which means Math.random() * 100 gives a decimal in [0, 100)
// 3. Math.floor(...) rounds down to an integer in [0, 99]
// 4. Adding minimum (1) shifts the range to [1, 100]
// Which means num is a random whole number from 1 to 100.
