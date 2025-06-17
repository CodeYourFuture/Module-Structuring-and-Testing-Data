const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// The variable "num" stores a random whole number between 1 and 100.
// The expression works as follows:
// 1: Math.random() generates a decimal 0 to 1 (not including 1)
// This decimal is multiplied by (maximum - minimum + 1) which gives a number between 0 and 99.999.
// Math.floor() then rounds this down to a whole number between 0 to 99.
// Adding "minimum" shifts the result so the final number is  between 1 to 100.
// for this reason num changes every time when you run the program always gives the number between 1 to 100.
