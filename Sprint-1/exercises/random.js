const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// ------------------------------ANSWERS------------------------------

// The num variable returns a random integer between 1 to 100.
// -------------------------------------------------------------------

// Math.floor() --> Round down float numbers to th nearest whole number
// Math.random() --> Generates a random integer between 0 and up to 1 (excluding 1)
// maximum - minimum + 1 --> Set range of our number
// + minimum --> adding our minimum number to ensure that the result is in our expected range
// -------------------------------------------------------------------

// 1) Math.random
// 2) maximum - minimum + 1
// 3) Math.random() * (maximum - minimum + 1)
// 4) Math.floor()
// 5) + minimum
// -------------------------------------------------------------------

// Here we used Math.random to produce a long random decimal number between 0 to 1, this number can include 0 but not 1, like 0.00001 or 0.99999
// then we need to set a range from 0 to 100, so we use maximum - minimum, but its not include maximum (here 100), therefore we add 1 to our result, 100 - 1 = 99 --> 99 + 1 = 100
// when result of Math.random is multiplied by (maximum - minimum + 1), a float number is produced, like 0.9999 * 100 --> 99.99 or 0.00001 * 100 --> 0.001
// we use Math.floor to round down the float number to nearest whole number, like 99.99 --> 99 or 0.001 --> 0
// but we need a number between minimum to maximum which is between 1 to 100, we add up with minimum to get a result in the range we need, 99 --> 100 or 0 --> 1

