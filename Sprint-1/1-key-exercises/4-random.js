const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// num stores the result of the expression after calculating it.
// Try breaking down the expression and using documentation to explain what it means
// There is a range of numbers from 1 to 100. In the expression, 
// (maximum - minimum + 1) calculates the size of the possible integers, which is 100. 
// The Math.random() function generates a random decimal number in the range 0 ≤ x < 1.
// This random decimal is then multiplied by the range size to scale it to a
// value between 0 and 100. The result is a floating-point number in this interval.
// Next, Math.floor() is used to round the number down to the largest integer less than
// or equal to the calculated value, producing an integer between 0 and 99.
// Finally, by adding minimum, the range is shifted from 0–99 to 1–100, giving a random
// integer within the required range.
// I have run 5 times the program and this produces different values each time because
// Math.random() generates a new random decimal number every time. 
// Since the final value of num depends on this function, the result changes on each execution.