const minimum = 1;
const maximum = 100;
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1. Math.random() generates a random decimal number between 0 and 1
// 2. (Math.random() * (maximum - minimum + 1) is defining by which number the random decimal number will be multiplied
// In this case minimum=1 and maximum=100 so the Math.random will be multiplied by 100
// 3. Math.floor rounds down the number to the nearest whole number
// 4. + minimum shifts the entire range up by minimum
// num represents a random integer between 1 and 100, inclusive.
