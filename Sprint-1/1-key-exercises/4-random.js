const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Answer: The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
// So Math.random() gives a random decimal between 0 and 1 and Multiplying by 100 makes it a number between 0 and 99.999 not including 100.
// Math.floor() removes the decimal, giving a whole number between 0 and 99 and Adding 1 shifts it up, so the final number is between 1 and 100.
// So num is a random whole number between 1 and 100.