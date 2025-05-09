const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


/* 
Answers: I have noticed that num represents a random number between 1 and 100 which is the minimum and maximum
i have broken down the code and tested it one by one
*/

console.log(Math.random());
//this will pick a random decimal number between 0 and 99
console.log(Math.random() * (maximum - minimum + 1));
//Mat.random produces a random number then its multiplied by the result we get from maximum - minimum + 1
// we add 1 to the result making sure that it reaches the maximum value which is 100
console.log(Math.floor(Math.random() * (maximum - minimum + 1)));
// here with Math.floor added we round down the result to the nearest number 
console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
// + minimum creates a starting point for the number generated
console.log(num);



