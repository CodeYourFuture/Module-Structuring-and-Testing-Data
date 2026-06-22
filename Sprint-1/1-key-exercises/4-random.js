const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//ANSWER
// num represents random whole numbers between 1 and 100 

// Math.floor is a built in function in JavaScript which basically rounds down a number to 
// its nearest whole integer.

//Math.random is also a built in function for selecting random numbers in this case
//numbers that are between 1 and 100

//Therefore num is equal to the a randomly selected number that has been
// rounded down to its nearest whole integer times (maximum - minimum + 1) + minimum
//the computer solves the expression in the bracket first as per mathematics order of operation
// rules so the expression shrinks to Math.floor(math.random()*100) + 1)
// so whatever the random value that the computer generates will be multiplied by 100 and rounded 
// or floored down to it's nearest whole integer plush1 