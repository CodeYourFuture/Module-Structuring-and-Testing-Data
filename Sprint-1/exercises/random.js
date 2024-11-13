const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

Answer
/* 
1) By assigning "const minimum" to 1 and "const maximum" to 100, it creates a possible range for numbers between those two limits.
2) Math.floor rounds down to the integer equal to or smaller than the number given. 
3) Math.random is a number than cannot be chosen by the User, where the number returned would be different each time and will be any 
/ number between 0 and 1 (but never 1 exactly)
4) The (maximum - minimum + 1) part of the code is to ensure that both the minimum and maximum numbers could be included in the range of numbers
for example, 100 - 1 + 1 = 100

The program will therefore return a random integer number between 1 and 100 that could include 1 and 100. 
*/