const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
1.num represents a random integer between 1 and 100, inclusive.
2.Math.floor() function rounds the number down to the nearest integer less than or equal to the number.
3.Math.random is a function generate a random float-point number between 0 (inclusive) an 1 (exclusive)
4.(maximum - minimum + 1) evaluates to 100 - 1 + 1 = 100
5.(Math.random() * (maximum - minimum + 1)) The result will be a floating-point number between 0 (inclusive)
 and 100 (exclusive) Math.floor will round 
6.+ minimum, (which is 1) is added to the result of Math.floor()
*/