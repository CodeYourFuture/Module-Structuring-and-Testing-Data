const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing



//Answer (before running the code):
// I believe a random number will be multiplied by 100 and added by 1 so will have 101, 201, 301, 401, 501.....
//maximum which is 100 minus minimum which is 1 and added to 1 will result to 100, 100-1+1=100, and it will be multiplied to 100 and added to minimum which is 1.

console.log(num);

//Answer (After running the code):
//Math.random unlike my expectations doesn't produce an integer, it produced a random Floating number between 0 and 1, so we get answer in range of 1 - 100
