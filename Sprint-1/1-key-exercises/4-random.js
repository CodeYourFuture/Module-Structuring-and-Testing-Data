const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//This code generates a random number within the range 1 to 100 (inclusive).
// Try breaking down the expression and using documentation to explain what it means
/*Math.random() - Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Examples: 0.3745, 0.9823, 0.0152.
Math.floor(...) - Rounds the number down to the nearest whole number. This converts the range from 0–99.9999... to 0–99.
Example: If 0.5 * 100 = 50, then Math.floor(50) = 50.
+ minimum - Adds 1 to shift the range from 0–99 to 1–100.
Example: If Math.floor(75.6) = 75, then 75 + 1 (minimum) = 76.
*/
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);