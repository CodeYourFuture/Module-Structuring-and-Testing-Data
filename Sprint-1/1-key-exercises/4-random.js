const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)

When breaking down the expression it starts by the third brackets where maximum - minimum + 1, maximum represents a 
100 and minimum represents a 1. From there you multiply the answer by Math.random, where a random number between 0 
and 1 is selected randomly. Another minimum is added to that answer. Now Math.floor rounds the answer to the nearest 
whole number, and that value is what you get when you run the code.