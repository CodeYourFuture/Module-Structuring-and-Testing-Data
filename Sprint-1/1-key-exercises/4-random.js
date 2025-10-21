const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// this will make a random number between 1-100. Math.random will give us a number between 0-1 (both ends included). 
// (maximum - minimum + 1): this is equal to 100-1+1=100 in this example.
// (Math.random() * (maximum - minimum + 1)): this will multiply the random number which is between 0-1 by 100 so we have a number. 
// Math.floor: this will round the number to the nearest lower whole number.
// + minimum: will add 1 (the defined minimum) to the number so it never be below 1.
// so we end up with a random number between 1-100