const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1))  + minimum;
console.log(num);


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Breaking down what num represents:
// num generates a random integer between 1 and 100 (inclusive)

// Step-by-step evaluation:
// 1. Math.random() → generates a decimal between 0 (inclusive) and 1 (exclusive)
// 2. (maximum - minimum + 1) → calculates the range size: (100 - 1 + 1) = 100
// 3. Math.random() * 100 → gives a decimal between 0 and 99.999...
// 4. Math.floor(...) → rounds down to get integers from 0 to 99
// 5. + minimum → shifts the range from 0-99 to 1-100

// So num represents a random integer from 1 to 100
