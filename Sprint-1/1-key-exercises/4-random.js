const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//The num represents a random decimal multiplied by (maximum - minimum) +1 all rounded to nearest whole number by Math.floor() and the output is added to minimum.
//Math.random() generates a random decimal number between 0 and 1
//* (maximum - minimum) +1 scales the number to be between 1 to 100
//Math.floor() rounds down the decimal produced to the nearest whole number 