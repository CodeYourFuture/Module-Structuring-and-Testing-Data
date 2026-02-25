const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// In the above expression num represent a variable that will store the result of that will be obtained from from the expression.
// maximum and minimum are variables available on the global scope, as inputs.
// They are evaluated first because of the parenthesis, this gives the precedence
// The output from the parenthesis is now going to serve as the range for the Math.random() method.
// Math.random() method produce random values from 0-1, with 0 and 1 inclusive and exclusive respectively
// The range value makes Math.random() to return result from 0 to  range-1
//the Math.floor() methods rounds down the value to the nearest whole number.
// The result from th random operation is added back to the minimum value to return num.