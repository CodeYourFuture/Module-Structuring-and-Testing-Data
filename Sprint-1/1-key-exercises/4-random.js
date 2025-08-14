const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* 
1. Since Math.random() returns an integer in the interval [0, 1). This means num eventually represents any random integer in the interval [1, 100]. 
2. Math.floor() rounds down the expression "Math.random() * (maximum - minimum + 1)"", leading to an integer in the interval [0,99].
   
3. So num returns an integer in the interval [0,99] + 1 which eventually means num return [1, 100]
4. Done!
*/
