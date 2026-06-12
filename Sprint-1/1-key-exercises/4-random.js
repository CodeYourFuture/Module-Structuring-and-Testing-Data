const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Martin answer - num is a random integer between minimum and maximum. Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive). Multiplying it by (maximum - minimum + 1) scales it to the size of the range. Math.floor() rounds it down to the nearest whole number, and adding minimum shifts the range so the lowest possible number is minimum (1) and the highest possible number is maximum (100).
