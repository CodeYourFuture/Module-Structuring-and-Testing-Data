const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//solutions below:

const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
 What is num?
num ends up being a random integer between minimum (1) and maximum (100) — inclusive of both 1 and 100.

//Let's break down the expression:

Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
Math.random()

This generates a random decimal number between 0 (inclusive) and 1 (exclusive).

Example output: 0.472, 0.9999, 0.015

Math.random() * (maximum - minimum + 1)

I'm multiplying the random decimal by the size of the range.

maximum - minimum + 1 ensures the range is inclusive.

In this case: 100 - 1 + 1 = 100

//So now you're getting a number between 0 and just under 100.

Math.floor(...)

//This rounds down the result to the nearest whole number.

//So now you get an integer from 0 to 99.

+ minimum

Finally, you add the minimum value (1), shifting the range from:

0–99 → 1–100

//Final result:
//So, num will always be a random whole number between 1 and 100, inclusive.