const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
1. Math.floor: rounds a number to its greatest integer less than or equal to its numeric value. 
    for example: Math.floor(5.6) // 5

2. Math.random() : generates a random value between 0 and 1 exclusive 

3. (maximum - minimum + 1) = 100 - 1 + 1 = 100

============What is actually happening:============
1. Math.random() * (maximum - minimum + 1)): generate a random value between 1 and 100(exclusive)

2. Math.floor(Math.random() * (maximum - minimum + 1)): rounds the number of its greatest integer less than or equal to its numerical value

3. Math.floor(Math.random() * (maximum - minimum + 1)) + minimum: make sure 100 is included.

Conclusion: The expression above generates a random number in this interval [1, 100]
*/