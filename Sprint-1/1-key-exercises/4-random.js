const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// const num is a variable.
// math.floor make the number integer number. 
// math.random give random number between 1 to 10.
// the random number will multiple by the result of maximum minus minimum plus 1 plus minimum.