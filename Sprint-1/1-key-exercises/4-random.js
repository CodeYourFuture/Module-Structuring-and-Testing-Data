const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
        //   num represents a random integer between 1 and 100.
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
    // breaking down the expression into smaller parts.
/* Math.floor(): this will return the largest integer less than or equal to a given number. In this case, it will round down the result of the expression inside the parentheses.
Math.random(): this will return a random floating-point number between 0 (inclusive) and 1 (exclusive). In this case, it will generate a random number between 0 and 1 but never exactly 1.
(maximum - minimum + 1): this will calculate the range of numbers we want to generate. In this case, it will calculate the difference between the maximum and minimum values (100 - 1 = 99) 
and add 1 to include both endpoints (99 + 1 = 100).
finally, the code adds the minimum value (which is 1) to the result.
*/

