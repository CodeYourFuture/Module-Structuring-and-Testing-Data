const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// - Math.random() will create a floating point (decimal) between 0 and 1 but always less than 1.
// - Math.floor() gets the decimal multiplied by 100 and strips it down to the nearest whole number (integer)

// Try logging the value of num and running the program several times to build an idea of what the program is doing
// The first part of the num expression ensures we have a two digit number between 0 and 99. And the best we can get is 99.
// The addition of the minimum, 1 in this case ensures num can also be 100.
// This ensures that both the "minimum" and "maximum" value can be part of the range of generated answers for the "num" variable.