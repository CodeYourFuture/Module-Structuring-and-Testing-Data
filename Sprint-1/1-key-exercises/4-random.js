const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// num represents a random whole number between the minimum and maximum values.

// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Step 1: Math.random() returns a decimal in [0, 1) (includes 0, excludes 1)
// Step 2: Multiply by 100 -> value is in [0, 100)
// Step 3: Math.floor(...) converts it to an integer in [0, 99]
// Step 4: Add 1 -> integer in [1, 100]
