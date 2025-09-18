const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// The num variable will evaluate to a random number between the minimum and maximum values

// Math.random()
// Random decimal number [0, 1)

// (maximum - minimum + 1)
// The size of the range

// Math.random() * (maximum - minimum + 1)
// Random decimal [0, 100)

// Math.floor(...)
// Rounds the result down to a whole number [0, 99]

// Adding minimum shifts the range up, so the final result is between the minimum and maximum [1, 100]
