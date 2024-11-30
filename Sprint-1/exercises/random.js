const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);

// The code geneates random numbers by using (math floor) which makes sure it only returns whole numbers,
// then to make sure the number used is between 1 and 100, the random whole number generated is timed by 100, 
// which is represened by max - min = 1 (100 - 1) = 1.