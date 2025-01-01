const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//1. Math.random()
//Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)( (0 <= value < 1))
// 2.Math.random() * (maximum - minimum + 1)

// Multiplies the random value by the range (maximum - minimum + 1).
// minimum = 1 and maximum = 100:
// Math.random() * (100 - 1 + 1); // => Math.random() * 100
// This will generate a random decimal number between 0 and 100.

// 3.Math.floor(...)

// Math.floor() rounds the decimal value down to the nearest whole number.
// this ensures the result is an integer, not a floating-point number.

// If Math.random() * 100 produces 57.98765, 


//so it is expected to get a result includes 0 but excludes 100 because of the nature of Math.random().


console.log(num)
