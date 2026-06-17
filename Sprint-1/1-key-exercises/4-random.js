const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// num creates a random whole number between 1-100 (inclusive).
// Try breaking down the expression and using documentation to explain what it means
//maximum-minimum+1 gives us the number of possible values (100-1+1 = 100)
//Math.random() gives us a random decimal number between 0 (inclusive) and 1 (exclusive)
//Multiplying Math.random() by 100 gives us a random decimal number between 0 and 100 (exclusive)
//Math.floor() rounds down the random decimal number to the nearest whole number.
//Adding minimum to the result gives us a random whole number between minimum and maximum (inclusive)
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
