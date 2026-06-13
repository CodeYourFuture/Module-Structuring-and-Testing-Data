const minimum = 1;
const maximum = 100;
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//In the declaration of num, we can break it down to below:

//1. A randon number, which is with decimals between 0 and 1, is created by method Math.random()
//2. The random number in step 1 is multipled by 100. That makes an number with decimals.
//3. The method Math.floor grounded the number in step 2 down to a whole number between 0 - 99.
//4. The number from step 3 is added 1, so it makes a whole number between 1-100.

//I think the overall javascript code here is to make a random whole number between 1-100.