const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//*Answer:
//Number returns a random whole number between 1 and 100.

// Try breaking down the expression and using documentation to explain what it means
/*Answer:
It uses 2 methods to achieve this
Math.random generate a random number between 0 and 1 eg. 0.343, 0.5. 0.67
Math.floor rounds the number to a whole number.
In this declaration:
Math.random will return a random decimal number and multiplies it by the sum of 
((maximum-minimum)+1). eg 0.343_*((100-1)+1) = 34.3.
Math.floor will take the total 34.3 and round it to a whole number 34*/

// It will help to think about the order in which expressions are evaluated
//*Answer:
//it first works out the random decimal number calculates the other values then evaluates to sum to a whole number. 

// Try logging the value of num and running the program several times to build an idea of what the program is doing
//*Answer:
//28, 64, 52, 86
