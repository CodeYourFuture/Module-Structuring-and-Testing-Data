const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//Answer:
// num is a randomly generated integer between 1 and 100 (inclusive).
console.log(num);

// Breakdown:
// 1. Math.random() generates a float between 0 (inclusive) and 1 (exclusive).
// 2. (maximum - minimum + 1) ensures the range includes the maximum (100 - 1 + 1 = 100).
// 3. Multiplying Math.random() by 100 scales the range to [0, 100).
// 4. Math.floor() rounds down to the nearest integer.
// 5. + minimum shifts the range from [0, 99] to [1, 100].




