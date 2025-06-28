const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it mean
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
num reprents the number is  randomly generated whole number betweeb 1 and 100,inclusive
Math.random() returns a random decimal between 0(inclusive) and 1(exclusive). while maximum-minimum +1=100, Math.random()*(maximum-matchMedia+1)
range is between 0 and 99.99999
Due to that Math.floor(...) rounds down the decimal to the nearest whole number.From this Stage, we have interger between o and 99.
After + minimum, the range is between 1 and 100.
This is classcial expressions for generating a random interger between two values- between 1 and 100, inclusive in this function.
This kind of expression is commonly used for things like: rolling dice,random quiz questions, game mechanics.
