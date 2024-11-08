const minimum = 1;
const maximum = 100;

const randomNum = Math.random();

const num = Math.floor(randomNum * (maximum - minimum + 1)) + minimum;

console.log(`Random = ${randomNum}`);
console.log(`Rounder = ${maximum - minimum + 1}`);
console.log(`Multiplied = ${randomNum * (maximum - minimum + 1)}`);
console.log(`Rounded num = ${Math.floor(randomNum * (maximum - minimum + 1))}`);
console.log(`num = ${num}`);

/* I saw here getting a random number from 1 to 100, 
to which the minimum number is added
 */

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
