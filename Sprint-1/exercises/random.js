const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num)

// minimum and maximum are variable contain 1 and 100
// math.random() generates a decimal number between 0 - 1
// (maximum - minimum + 1) is 100 
// (a decimal number(0-0.99) * 100 ) + 1
// the result will be a number with decimals
// math.floor will get the whole number of result of one line upp
// num is a random number of between 1 to 100


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
