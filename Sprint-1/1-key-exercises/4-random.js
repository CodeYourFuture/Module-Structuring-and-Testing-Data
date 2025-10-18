// A program to generate a random number between 1 and 100
const maximum = 100;

const num = Math.floor(Math.random() * (maximum)) + 1;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

//Math.random generates a decimal number between 0 and 1
//multiplying (maximum - minimum + 1) this part generates a number between 0 and 100 that can still have decimal places.
/// but since minimum in this example is 1 it can be simplified from (maximum -1 +1) ==>(maximum)
//Math.floor rounds down to the nearest whole number 
//+ minimum shifts the range from 0-99 to 1-100
//so the final output is a whole number between 1 and 100, this could also be simplified to +1
//obviously the function was more useful for different ranges when using the minimum expression
/// without my simplification, but it is more concise for this specific example.

