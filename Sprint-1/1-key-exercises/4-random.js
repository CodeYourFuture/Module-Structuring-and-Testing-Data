const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num); // Output the generated random number


/*num represents a random integer between 1 and 100 (inclusive). */

/*Math.random()
This means it can return 0, but it will never return 1. 
Think of it as generating a random fraction between 0 and 1. */

/*  */
