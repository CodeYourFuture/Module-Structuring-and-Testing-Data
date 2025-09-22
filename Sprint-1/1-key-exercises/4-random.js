const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// num is a variable that stores a random integer between minimum and maximum.
// the num variable is calculated using the Math.random() function, which generates a random floating-point number between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
// const num stores the result of the expression on the right-hand side of the equals sign
// the = expression is used to assign a value to a variable
// the expression (maximum - minimum + 1) calculates the range of numbers between minimum and maximum.
// adding minimum shifts the range to start from the minimum value instead of 0.

// It will help to think about the order in which expressions are evaluated
// 1. (maximum - minimum + 1) is evaluated first, resulting in 100
// 2. Math.random() is called, generating a random floating-point number between 0 (inclusive) and 1 (exclusive)
// 3. The result of Math.random() is multiplied by the result of (maximum - minimum + 1), scaling the random number to the desired range    
// 

// Try logging the value of num and running the program several times to build an idea of what the program is doing
// The running  the the program several times you can see that the program is generating a random number between 1 and 100.

console.log(num);
