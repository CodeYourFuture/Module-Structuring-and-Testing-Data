const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
 
//Math.random creates a random number between }0,1{ like :0.1 , 0.001 ....
//Math.floor( Math.floor(Math.random() * (maximum - minimum + 1)) ) that give us a random number between 0--99
//by add minimum it will give us a num between 1--100;
// We can say the function create a random number between Minimum and maximum.