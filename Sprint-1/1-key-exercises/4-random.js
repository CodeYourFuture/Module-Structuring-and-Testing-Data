const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?  
// num represents a random whole number between the minimum and maximum values.

// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Step 1  Generate a random decimal between 0 and 1
//step 2 multiplys the random decimal by 100 - 1 = 99 + 1 = 100 
//step 3 math.floor makes it a whole number between 0 and 99
//step 4 adds 1 to make it a whole number between 1 and 100