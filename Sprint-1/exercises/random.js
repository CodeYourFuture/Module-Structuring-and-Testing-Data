const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//A.Math.random():

//This function generates a random floating-point number between 0  and 1.
//This means the value could be something like 0.234 or 0.999, but it will never be 1.
//B.Math.random() * (maximum - minimum + 1):

//Math.random() is multiplied by (maximum - minimum + 1).
//In this case, (maximum - minimum + 1) is 100 - 1 + 1, which equals 100.
//So, Math.random() * 100 will produce a random number between 0  and 100 .
//Math.floor(...):

//C.Math.floor rounds down the resulting floating-point number to the nearest whole number (integer).
//This means the result of Math.floor(Math.random() * (maximum - minimum + 1)) will be an integer between 0 and 99 (inclusive).
//D.+ minimum:

//Adding minimum shifts the range from [0, 99] to [1, 100].
//This ensures the final result, num, is between 1 and 100 .

//RESULT
console.log(num);
