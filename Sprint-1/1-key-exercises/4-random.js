const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


Math.random()

This gives you a random decimal number between 0 (inclusive) and 1 (not including 1).

Example output: 0.3, 0.89, 0.01, etc.

(maximum - minimum + 1)

This calculates how many possible numbers there are between minimum and maximum, including both.

In this case: 100 - 1 + 1 = 100 possible numbers.

Math.random() * (maximum - minimum + 1)

Multiplies the random decimal by 100. This gives a number between 0 and just under 100.

Example: If Math.random() gives 0.66, then 0.66 * 100 = 66.

Math.floor(...)

Rounds the result down to the nearest whole number.

So 66.8 becomes 67.

+ minimum

This shifts the range from 0–99 to 1–100.

So if Math.floor(...) gave 67, then adding 1 gives 68.


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
