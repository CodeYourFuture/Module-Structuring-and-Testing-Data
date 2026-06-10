const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Expressions in JS are evaluated from inside out, following the brackets. So (maximum - minimum + 1) would become 100-1+1=100.
//Then we move on to the next outer bracket "Math.random()", which is a function designed to generate random numbers. We multiply that random number
//by 100 and that is our brackets calculated for now. Next in the expression is the function "math.floor" which rounds down numbers to the 
//nearest whole number, to which we add the minimum at the end. Which is number 1. 

// I have run this code on my Chrome console multiple times and got a diffrent number each time. 

const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
