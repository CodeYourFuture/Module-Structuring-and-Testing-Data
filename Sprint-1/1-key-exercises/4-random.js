const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
//math.floor removes the decimal and rounds the number down to the nearest whole number
//math.random generates a random number between 0 and 1
//the random number generated is multiplied by the difference between the maximum and minimum value plus 1
// we then add the minimum value to the results
// It will help to think about the order in which expressions are evaluated

// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)