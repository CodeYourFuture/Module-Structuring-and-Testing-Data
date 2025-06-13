const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
A; Num will be a random integer between 1 and 100, inclusive — meaning it can be any whole number from 1 to 100.
// Try breaking down the expression and using documentation to explain what it means
A; Breakdown of the expression:
1. Math.random()
Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
Example: 0.345, 0.999, 0.0123, etc.
2. (maximum - minimum + 1)
This calculates the range of values you want.
100 - 1 + 1 = 100 → This means we want a number between 1 and 100.
3. Math.random() * (maximum - minimum + 1)
Now we're multiplying a decimal by the range.
This gives a decimal number between 0 and 100, but not including 100.
Example: 0.5 * 100 = 50.0, 0.89 * 100 = 89.0
4. Math.floor(...)
This rounds the decimal down to the nearest whole number.
So 50.9 becomes 50, 99.999 becomes 99, etc.
The result is an integer between 0 and 99.
5. + minimum
This shifts the whole range up by the minimum value (in this case, 1).
Now instead of 0–99, you get 1–100.

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
A; for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  console.log(num);
}