const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);

// num is a random integer between 1 and 100.
/*
 Breaking down what happens in the expression:

 - Math.random() generates a random floating-point number between 0 and 1.

 -Multiplying this by (maximum - minimum + 1) scales it to a range of 0 to 100.

 -Math.floor() rounds down the result to the nearest integer number.

 -Finally, adding minimum shifts the range to be between 1 and 100.
 
 */
