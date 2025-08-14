const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// - Num represents a program that generates a random Integer between 1 and 100 each time it runs.

// Try breaking down the expression and using documentation to explain what it means
/*
1. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive), e.g. 0.3749....
2. maximum - minimum + 1 calculates the total number of possible values.
So: 100 - 1 + 1 = 100, which means you want 100 possible values (from 1 to 100).
3. You then multiply the random number by 100. This gives a number between 0 and 99.999...
4. Math.floor(...) rounds it down to the nearest integer — so you now get a number from 0 to 99.
5. Finally, you add minimum (which is 1), so the final number ranges from 1 to 100 inclusive.
*/
// It will help to think about the order in which expressions are evaluated
/*
ORDER OF EVALUATION

1. maximum - minimum + 1
This is evaluated first to determine the range of possible values. Example: 100 - 1 + 1 = 100.
2. Math.random()
Generates a random decimal number between 0 and 1 (not including 1).Example: 0.723.
3. Multiplication: Math.random() * (maximum - minimum + 1)
JavaScript now multiplies the random number by the range. Example: 0.723 * 100 = 72.3.
4. Math.floor(...)
Rounds down the result of the multiplication to the nearest integer. Example: Math.floor(72.3) = 72.
5. Addition: ... + minimum
Finally, JavaScript adds the minimum to shift the range correctly. Example: 72 + 1 = 73.
*/
// Try logging the value of num and running the program several times to build an idea of what the program is doing
/*
  - The program will generate random integers from 1 to 100 each time it runs.
*/
