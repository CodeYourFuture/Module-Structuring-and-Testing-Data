const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// num represents the result of equation at the right hand side of the operator =

// Step-1 ---> Math.random() generates a random decimal,
// Step-2 ---> (maximum-minumum +1) is evaluated 
// Step-3 ---> Math.random() is multiplied by (maximum-minumum +1)
// Step-4 ---> the resukt of Step-3 is round by the method Math.floor
// Step-5 ---> minimum is added to the result of Step-4

// Thus, num represents random numbers generated between minimum 1 and maximum 100. As we run the code several times it
// generates new numbers. 


console.log(num);