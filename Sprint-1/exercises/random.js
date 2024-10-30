const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//1- Math.random() generates a random decimal number between 0 and 1.
//2- This decimal is then multiplied by (maximum - minimum + 1).
/*
    a- (maximum - minimum + 1) calculates the range of numbers between minimum and maximum.
    b- Multiplying Math.random() by 100 means we’ll get a random decimal between 0 and 100.
    c- Adding 1 to the result means we’ll get a random decimal between 1 and 100
*/
//3- Math.floor() rounds down to the nearest whole number.
//4- This means that num will be a random whole number between 1 and 100.
