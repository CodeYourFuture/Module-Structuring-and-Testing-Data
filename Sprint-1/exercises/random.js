const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// answer
//here the num is any integer between the value of 1 to 100, to breakdown the code
//  the function Math.random() calls any number between 0 to 0.9999. lets say 0.5575


// and this Math.random() * (maximum - minimum + 1) calculates the random number we got by (maximum - minimum + 1), which can be (100-1+1) which will give us the result of 100.


//  (0.5575 *100) = 55.75
 

// the function Math.floor will round the result of the previous step down to the nearest whole number, giving a random integer between 0 and 99 which in this will be 55.


// finally add the minimum to the result

console.log(num);
