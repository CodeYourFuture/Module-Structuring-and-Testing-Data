const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
//num is going to be a random number between 1 and 100 inclusive of 100.
// Try breaking down the expression and using documentation to explain what it means
//math.random() will generate a random number between 0 and 1 excluding 1, this will be multiplied by the result of the difference between maximum and minimum plus 1 giving 100. we will apply the math.floor function to round down the result to the nearest integer, which gives us a number between 0 and 99. Finally, we will add the minimum value to the result, which will give us a random number between 1 and 100 inclusive of 100.
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
