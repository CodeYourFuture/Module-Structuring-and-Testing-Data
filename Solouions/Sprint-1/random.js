const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Breaking down the expression:
// 1. Math.random() generates a random number between 0 and 1
// 2. We multiply it by (maximum - minimum + 1) to scale it to our range
// 3. Math.floor() rounds down to the nearest integer
// 4. We add minimum to shift the range to start from the minimum value

// So num is a random integer between minimum and maximum values.

console.log(`Num is a random number between ${minimum} and ${maximum}: ${num}`);
