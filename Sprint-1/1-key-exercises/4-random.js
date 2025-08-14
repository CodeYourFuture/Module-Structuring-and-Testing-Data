const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* 
In 1 step program calculates "(maximum - minimum + 1)", which evaluates to 100. This is the total range of numbers between 1 and 100
In 2 step program multiples 100 by floating point, random number, that's greater than or equal to 0 and less than 1
In 3 step program the Math.floor function rounds the result down to the nearest whole number
In 4 step program adds 1 to the number returned by Math floor function

I would say, that num function represent a random amount of percents
*/
