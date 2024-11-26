const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

//Breaking down the expression:
//1. Math.random generates a random number in the range of [0,1)

//2. maximum - minimum + 1 calculates the range of possible values. 
//Here, maximum is 100 and minimum is 1, so the range is 100 - 1 + 1 = 100.

//3 Multiplying a random decimal from Math.random by 100 generates a random value in the range of [0,100)
//If Math.random() generates 0.5, then 0.5 * 100 = 50.
// If Math.random() generates 0.999, then 0.999 * 100 = 99.9.

//4.Math.floor rounds the result down to the nearest integer.
//For example Math.floor(99.9) generates 99

//5.Adding minimum to the result changes the range from [0,99) to [1,100]