const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// this expression is used to generate random integer number from minimum to maximum (inclusive):

// the math.random() generates a random number from 0 to 1
// the Math.random() * (maximum - minimum + 1) scales the random number to a range of (maximum - minimum + 1)
// this helps to cover all possible values from minimum to maximum
// the Math.floor(...) rounds up the result to make sure we get an integer value
// the + minimum shifts the range so that we start at minimum and not at 0

console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
