const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() generates a random decimal number between 0 and 1.
// Since the minimum is 1 and maximum is 100 the bracket (maximum - minimum + 1) will always equal 100.
// The random decimal number is then multiplied by 100, resulting in a random decimal number between 0 and 100.
// Math.floor() then rounds this decimal number down to the nearest whole number.
// Finally, the minimum value (1) is added
// Resulting in a final value of num being a random whole number between 1 and 100.
