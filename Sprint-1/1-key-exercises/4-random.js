const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
//The math.Floor method rounds a number to the nearest integer, so using bodmas, 
//the expressions are evaluated, the minimum which equals 1 is added to 1 then subtracted from maximum(100), after which it is multiplied by 
//a random number between 0-1 exclusive and then rounded down to the nearest integer after which the minimum is added. The values produced ranges from 0-100