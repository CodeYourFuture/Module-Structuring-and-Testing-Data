const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


___________________________________**SOLUTION**_______________________________________________

/* The code is trying to pick a random whole number between 1 and 100.

1) Math.random(): This part creates a random decimal number between 0 and 1. For example, it might create 0.4, 0.78, or 0.99.

2) Math.random() * (maximum - minimum + 1):

3) maximum - minimum + 1 calculates the range, which is 100 - 1 + 1 = 100.

   Multiplying by 100 gives a random number between 0 and 100 (though it's still a decimal at this point).

4) Math.floor(...): This rounds down the decimal to the nearest whole number, giving a number between 0 and 99.

5) + minimum: By adding 1, the number range shifts up by 1. So instead of being between 0 and 99, it’s now between 1 and 100.

Example
Let’s say Math.random() gives 0.65:

0.65 * 100 = 65
Math.floor(65) = 65
65 + 1 = 66
So, num would be 66.  */

// Every time I run the code, num is giving me a different random number between 1 and 100.