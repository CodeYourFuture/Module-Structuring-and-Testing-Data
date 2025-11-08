const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num represents the results of equations at the right side of operator =

//step-1---> Math.random() generates a random decimal.
//step-2---> (maximum - minimum + 1) evaluates to 100.
//step-3---> Math.random() is multiplied by (maximum - minimum + 1) which is 100, resulting in a random decimal between 0 and 100.
//step-4---> the result of Step-3 is round by the method Math.floor.
//step-5---> minimum is added to the result of step-4.
//Therefore, num represents random numbers generated between minimum 1 and maximum 100, as we run the code several times
//generates new numbers.

console.log(num);