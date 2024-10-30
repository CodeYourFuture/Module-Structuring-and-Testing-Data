const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);
//1. Math.random select a random number
//2. max value mines min and then + 1
//3. the random number (result of step 1) multiply in result of step 2 
//4. Math floor function select integer part of result step 3
//5. result of step 4 sum with min number
//6. the result assign to the num
// *** because in first step we use math random, result will be different after executing code***