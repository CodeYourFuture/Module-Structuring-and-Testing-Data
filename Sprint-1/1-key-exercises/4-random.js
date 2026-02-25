const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// the num represents a value with limited interval and that's why
// the num assigned to a value that's in the dor of an expression
// the math object is invoked to perform some mathematical tasks
// the random method is invoked to get a random number between 0 and 1
// the random number is multiplied by 100 
// the floor method is invoked to round down the result to its nearest integer
//  added one to the new result
// the final result of the whole expression is what the variable num assigned to
/* after applying the program several times, I got the idea that the program is generating 
a value to the num variable thats always between minimum an maximum*/  
