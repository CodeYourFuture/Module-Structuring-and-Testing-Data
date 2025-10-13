const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// num is an integer between minimum and maximum, between 1 and 100 inclusive 
// math.random() produces a decimal between 0 (inclusive) and 1 (exclusive)
// math.floor() rounds down to the nearest integer
// (maximum - minimum + 1)) + minimum chooses a number between minimum and maximum and adds 1 so its inclusive of maximum
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
