const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

//math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). which we multiply by 100.
//we round the above number to the largest interger less than or equal to the given outcome.
//we add the value of minimum to the result.
//num gives us a random number between 1 and 100.

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
