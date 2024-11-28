const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);
//1. Math.random select a random number. This function generates a random decimal number between 0 (inclusive) and 1 (exclusive)
//2. Because we want to be sure that range is [1,100], we multiply random number in (max - min). But max - min return 99 values and exclude 100 so we add 1 to include 100)
//3. (Math.random() * (maximum - minimum + 1))This results in a floating-point number between: [0, 100)
//4. Math.floor rounds down and returns the largest integer less than or equal. So possible range number can be [0,99]
//5. At tnd with + 1 we can be sure that we have min and max in our range [1, 100]
//6. the result assign to the num
// *** because in first step we use math random, result will be different after executing code***