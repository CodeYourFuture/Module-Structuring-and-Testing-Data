const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num)
//num represent a random integer between 1 and 100
//1. Math.random() generates a random decimal number between  0  and 1

//2. maximum - minimum + 1 calculates the  numbers we want to generate.
// In this case, 100 - 1 + 1 = 100, so the range is 100.

//3. Math.floor() rounds the number down to the nearest whole number.
//This ensures we get an integer between 0 and 99

//4. + minimum
//Adding minimum (which is 1) shifts the range from [0, 99] to [1, 100].
//This means num is now a whole number between 1 and 100
