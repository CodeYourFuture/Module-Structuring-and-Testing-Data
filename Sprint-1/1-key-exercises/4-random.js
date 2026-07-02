const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log (num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// From what I can work out, it is generations a random number between 2 and 100 for the value of num.
// math.floor ensures the number is a whole number without decibils. (maximum - minimu +1) is (100 - 1 + 1)=100.
// Math.random pics a random number from 0 to 1 with two decibils, such as 2.13.
// The Order they follow is: Match.random multiplied by (Maximum - minimum + 1), then add minimum of 1. 