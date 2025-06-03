const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// - Num represents a program that generates a random Integer between 1 and 100 each time it runs.

// Try breaking down the expression and using documentation to explain what it means
/*
   1.- Math.floor(): will round down and return the largest integer less than or equal to a given number. I.e It rounds down a number to the nearest integer.
   2.- Math.random * 100: will return a random floating number between 0(inclusive) and 100 (exclusive).I.e It will always return a decimal number lower than 100
   3.- (maximum - minimum + 1): here we are Subtracting 1 from 100 and adding 1 to 99 which equals to 100 which is the total count of our range from 1-100.
   4.- + 1 : here we are shifting the range of random numbers to become 1 - 101, excluding 101.
*/
// It will help to think about the order in which expressions are evaluated
/*
   1.- math.random() generates a number between 0 and 1 excluding 1.
   2.- then I subtract minimum from maximum and add 1, making it 100
   3.- then I multiply the value of math.random() by 100
   4.- then I use math.floor to round down the value of math.random() to an integer starting from 1 to 100 inclusive because of the +1 at the end.
*/
// Try logging the value of num and running the program several times to build an idea of what the program is doing
/*
  - The program will generate random integers from 1 to 100 each time it runs.
*/
