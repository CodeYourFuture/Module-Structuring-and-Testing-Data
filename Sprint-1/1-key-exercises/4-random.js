const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* 
1. num represents any random whole number (integer) between 1 and 100 (both included)
2. Math.floor(x) it rounds down x to a value that is less than or equal to x, while Math.random() it generates random 
   numbers that are equal to 0 and less than 1.
3. before we multiply (Math.random() by (maximum - minimum + 1) or vice versa, each expression gets evaulated 
   first on its own. Math.random() leads to an integer between 0 and less 1, while (maximum - minimum + 1)) evaluates 
   to 100. Then multiplication comes into place and we get floats from 0.00 and less than 100. Having Math.floor()
   as a method basically means we now have random integers from 0 and 99. By considering the last part of the value
   assigned to num, we now have random integers from 1 and 100 (both included).
4. Done!
*/
