const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
/*due to rules of precedence, parenthesis executes first. Inside parenthesis, subtraction executes first, 
then addition executes.*/
console.log(num);
/*num keeps changing because Math.random() function outputs a different random value between 0 and 1 every time it runs. */

// In this exercise, you will need to work out what num represents? answer: a numerical value 
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
