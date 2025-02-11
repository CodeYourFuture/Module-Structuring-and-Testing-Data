const minimum = 1;
const maximum = 100;


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
 

//Math.random() generates a decimal between 0 and 1.
//Multiplying by 10 scales it to a decimal between 0 and 9.999.
//Math.floor() rounds it down to an integer (0 to 9).
//Adding 1 shifts the range to (1 to 10).

const num = (5 + 3) * 2 - 4 / 2;
console.log(num);
