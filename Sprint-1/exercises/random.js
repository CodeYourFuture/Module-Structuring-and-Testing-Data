const minimum = 1;
const maximum = 100;

const num = Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num represents a random value which is first calculated in the inner parentheses 
//then a random number is generated from 0 upto but not including 100 
//then the random number adds 1
//math.floor() then rounds down and returns the largest integer less than or equal to a given number

console.log(num);