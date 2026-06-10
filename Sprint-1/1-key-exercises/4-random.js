const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Math.floor - rounds the number to the nearest integer (whole number)
//Math.random - generates a random number between 0 (inclusive) and 1 (exclusive)
//1. The first caluculation is Math.random * maximum (100) - minimum (1) + 1
//2. The next calculation is Math.floor of the result of the first calculation
//3. The final calculation is adding the minimum (1) to the result of the second calculation
// Due to the use of Math.random, the value of num will be different each time the program is run, but it will always be a whole number between 1 and 100
