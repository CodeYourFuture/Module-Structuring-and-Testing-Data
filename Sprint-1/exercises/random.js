const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)


// Math.random():
// Generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the result could be anything from 0 up to but not including 1.
// Example: 0.345, 0.876, etc.

// Math.random() * (maximum - minimum + 1):
// This scales the random number to the desired range.
// maximum - minimum + 1 ensures the range includes all numbers between minimum and maximum, inclusive.
// If maximum is 100 and minimum is 1, this gives 100 - 1 + 1 = 100, so the range is now from 0 to just under 100.
// Example: 0.345 * 100 could give 34.5.

// Math.floor():
// Takes the floating-point number from the previous step and rounds it down to the nearest whole number.
// This ensures we get an integer.
// Example: Math.floor(34.5) would result in 34.


// + minimum:
// After scaling and flooring, we shift the range to start from minimum instead of 0.
// Adding minimum (1 in this case) ensures the random number falls between minimum and maximum.
// Example: If Math.floor() gave 34, adding 1 results in 35.

// Result:
// num will be a random integer between 1 (inclusive) and 100 (inclusive).




