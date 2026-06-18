const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// num represents a random integer between the minimum and maximum values, inclusive. The expression math.random() picks any decinmal number between 0 and 1, where then it's multiplied by the change of min & max + 1. Then the Math.floor() rounds the number down to the nearest integer and finally the minimum value is added to ensure the result is withn the specified range.

// Try breaking down the expression and using documentation to explain what it means
/* Math.random() generates a random decimal number between 0 (inclusive) and 1(not inclusive). 
The expression (maximum - minimum +1) calculates the range of possible values, which is 100 - 1 + 1 = 100.
Then the result of Math.random() is multiplied by the range, which gives a random decimal number between 0 and 100 (not inclusive).
Math.floor() rounds the result down to the nearest integer, which gives a random integer between 0 and 99 (inclusive).
Finally, adding the minimum value of 1 shifts the range up by 1, resulting in a random integer between 1 and 100 (inclusive). */

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
