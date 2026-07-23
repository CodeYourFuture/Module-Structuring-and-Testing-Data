const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
  What 'num' represents: A random whole integer between 1 and 100 inclusive.
  
  Order of evaluation breakdown:
  1. (maximum - minimum + 1) // Calculates total size of target range (100).
  2. Math.random()            //Generates a random decimal between 0 and 0.999...
  3. Math.random() * 100      // Scales decimal up to a range between 0 and 99.999...
  4. Math.floor(...)          // Rounds down to nearest integer, yielding 0 to 99.
  5. + minimum                 //Shifts final range up by 1, resulting in 1 to 100.
*/

console.log(num);
