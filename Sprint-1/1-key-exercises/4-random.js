const minimum = 1; // This variable shows the smallest number value possible is 1
const maximum = 100; // This variable shows the highest or max value for a random number is 100

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(`The random number is ${num}`);

// 1. Math.floor is a JavaScript function that will round down a number to the nearest whole number. Math.random() is similar but chooses any random number between 1 and 100 (as declared in the variables minimum and maximum).

// 2. What const num does is it stores the answer of of the expression. The expressions goal is to generate a random number between 1 and 100, rounds it down to the nearest whole number, then multiplies it by 100 (maximum 100 - minimum 1 + 1). Then another layer of complexitity is added by adding the result to 1.

// 3. When the code is run, it will generate a random number between 1 and 100, round it down to the nearest whole number, and then add 1 to it. This means that the final result will always be between 1 and 100, inclusive.


/* Instructions for the exercise:

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

*/