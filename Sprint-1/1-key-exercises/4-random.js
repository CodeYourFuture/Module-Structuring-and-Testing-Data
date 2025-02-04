const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

// Try breaking down the expression and using documentation to explain what it means

/* Math.random() will generate a floating number between 0 (included) and 1 (not included). An example can be 0.95, 0.23 and so on.
(maximum - minimum + 1) -  (100 - 1 + 1) = 100 this part will increase the range of the number to 100.
 Then Math.floor() will round the floating number to the nearest integer number. */

// It will help to think about the order in which expressions are evaluated
/* Operator precedence is followed to determine the order in which the expression is evaluated, and from left to right 
if there are operators with same precedence. The order of expressions are: expressions in parenthesis, 
functions then multiplication, addition and deduction   */

// Try logging the value of num and running the program several times to build an idea of what the program is doing
// the result is always a random number from  1 to 100.

console.log(num);

