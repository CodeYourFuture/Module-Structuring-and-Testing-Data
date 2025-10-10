const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num is a random number between minimum and maximum (inclusive)
/*Math.random()

This gives you a random decimal number between 0 (inclusive) and 1 (exclusive) — meaning it can be 0, but never exactly 1.

Example outputs:
0.23 

/*(maximum - minimum + 1)

This calculates how many whole numbers are in the range, including both ends.

Example:
100 - 1 + 1 = 100

So, there are 100 possible integers from 1 to 100.

/*Math.random() * (maximum - minimum + 1)

This scales the random decimal to the desired range size.

Example if Math.random() gave 0.57:
0.57 * 100 = 57
/*Math.floor(...)
The Math.floor() method in JavaScript is used to round a number down to the nearest integer, regardless of whether the number is positive or negative or has a decimal part.
Example:
Math.floor(57.8) → 57

/*+ minimum

Finally, we shift the range up so it starts at 1 instead of 0.
0–99 becomes 1–100*/

//The order for evaluation is:
/*maximum - minimum + 1

Math.random() * (that result)

Math.floor(...)

+ minimum*/

//I run the code several times and got different numbers one was 60 the other one was 88
