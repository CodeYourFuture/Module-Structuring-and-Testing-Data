const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a variable that will be assigned an integer number after the operators are done.
// Math.floor() rounds a decimal to its nearest number to make it an integer. ex = 1.2 => 1.
// Math.random() is a method used to create numbers between (0-1) and usually it creates a decimal like (0,2) or etc.
// each time I run it, I got different number as Math.random() generates different number each time we run it.