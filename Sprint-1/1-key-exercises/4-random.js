const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

//num is a random number between 1 and 100 including 1 and 100 [1,100]
//Math.floor rounds the decimal number to nearest lower number
// Math.random() generates a random decimal number between 0 and 1 including 0 but not including 1 [0,1)
// when max – min need to add +1 or not all the numbers will be 
// included for instance max=5 min=1 5-1=4 but there are 
// 5 numbers, 1, 2, 3, 4,5 so need to +1
//• + minimum → shift the range up to start at the minimum value
