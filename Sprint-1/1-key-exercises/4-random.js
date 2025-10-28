const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Breakdown of the 'num' declaration
// The expression of `num` can be broken down into several discrete steps:

// 1. `Math.random()`, this generates a random floating point number
// This number is between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// 2. `(maximum - minimum + 1)` this part simple resolve to 100
console.log("maximum - minimum + 1:", maximum - minimum + 1);

// 3. By multiplying steps 1 and 2, the floating point number is scaled from 0-1 to 0-100
// This adjusted scale is defined by the `minimum` and `maximum` variables declared earlier
console.log(
  "Math.random() * (maximum - minimum + 1):",
  Math.random() * (maximum - minimum + 1)
);

// 4. `Math.floor()` then rounds down to the nearest whole number
// Turning the floating point number into a whole number and adjusting the range from 0-99
console.log(
  "Math.floor(Math.random() * (maximum - minimum + 1)):",
  Math.floor(Math.random() * (maximum - minimum + 1))
);

// 5. Lastly, `+ minimum` shifts the result up by the value of 1
// In effect, this adjusts the range from 0-99 to 1-100
console.log(
  "Math.floor(Math.random() * (maximum - minimum + 1)) + minimum:",
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
);

// The final result is a random whole number between minimum (1) and maximum (100)
// Where 100 is an inclusive valid value in the range
console.log("num:", num);
