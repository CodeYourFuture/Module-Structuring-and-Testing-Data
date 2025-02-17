const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

//const mininum is assigned to number 1
//const maximum is assigned to number 100
// const num has the expression Math.floor
// which rounds the answer within Math.random multiplied maximum minus minimum + 1
// the answer of that expression is then added to the minimum
// what program basically does is that it selects a random number between 1 and 100

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
