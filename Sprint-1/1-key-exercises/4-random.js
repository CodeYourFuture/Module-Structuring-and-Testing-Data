const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//ANS:
//num represents a randomly generated integer between a specified minimum (1) and maximum (100), inclusive.
//Math.random()This function returns a floating-point (decimal) number that is greater than or equal to $0$ but strictly less than $1$
//(maximum - minimum + 1) represents the total number of possible integers within the range (from 1 to 100)
// Math.random() * 100: multiplication of random decimal by range.
// Adding the minimum value (1) to the result "shifts" the entire range upward so it doesn't start at zero.
//Math.floor() rounds a number down to the nearest whole integer.