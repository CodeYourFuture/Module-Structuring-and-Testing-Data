const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*Number data type represents any type of number such as integer, float number(decimal number), infinity number, etc...
In the code at line 4 the num variable are doing math function that generate a integer between variable minimum and maximum value,
the floor method behind the Math are is main purpose if to help turn value of a float number and round it up to the nearest integer.
inside the Math.floor parameter the math random method is choosing a random float number between 0 and 1 and have it multiply with the second expression
to set the range of possible value range from 0 to under 100. The last plus one to make sure the that number stay above 0(0+1) and to 100(99+1);
*/