const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//Const num is  generating a random number between minimum and maximum (1-100). In this case it includes both 1 and 100.
//On the right hand side we have a expression with two functions. 
// 1.Math.floor () - This function rounds down the number to nearest number.
// 2.Math.random()- Generates a number greater than or equal to 0 but less than 1.
//The expression(they evaluate to a single value) (maximum - minimum +1) evaluates to 100 always.(100-1+1). 


// This first thing evaluated is the expression (maximum-minimum +1) which gives us the range of 100.
//The second step is that Math.random generate a decimal number btw 0 (included)and 1(excluded)
//This decimal number is then multiplied by range e.g 100 in this case. To this number then Math.floor is applied which
//rounds it down to nearest whole number.
//The last step is to add the minimum to the rounded down whole number which is 1 in this case.

// We can conclude that num is a random whole number that falls between the range of minimum 1 - maximum 100


node Sprint-1/1-key-exercises/4-random.js