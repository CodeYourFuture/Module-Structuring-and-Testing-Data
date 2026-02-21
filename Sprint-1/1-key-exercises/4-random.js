const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*num represent any value between 1 to 100.
Math.floor is a method that rounds a number down to the nearest whole number.
Math.random is a method returning any number that is greater than or equal to 0 and less than 1.
first of all i will try to get a value from 0 to less than 1 from Math.random and multiple it by 100
and apply Math.floor to the result which will give me the integer number and then add the minimum value i.e. 1   */
