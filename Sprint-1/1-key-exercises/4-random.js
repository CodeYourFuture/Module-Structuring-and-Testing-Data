const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer

// 1. 
// The num in this scenario represent any integer between 1 and 100

// 2.
// Math.floor: rounds the number down to the nearest whole number which means it ignores the number to the right of the point. eg. 4.7=4
// Math.random is a js code that returns any random number that is greater than or equal to 0 and less than 1
//* is multiplication
// maximum is the maximum given number, in this case 100
//- is a subtraction
// minimum is the minimum given number, in this case 1
//(maximum - minimum +1) this is subtracting the minimum number from the maximum and add 1, in this case (100-1+1)=100
//+ minimum: this turns the value by adding 1 to the whole equation. 

//3.

console.log(num)
