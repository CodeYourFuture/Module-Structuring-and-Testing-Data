const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// (maximum - minimum + 1) this part of the code calculates the range of possible numbers, including both the minimum and maximum values.
// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Math.floor() rounds down the result to the nearest whole number.
// ..+ minimum) in this part of code we add the minimum in this case 1 to the MATH.floor result like that the we ensure it fall within the range.
// num variable will hold a random integer between 1 and 100 inclusive both.