const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//console.log(num); // num represents a random number generated between 1 and 100 (minimum & maximum) : a random number is generated using Math.random() then brought into a whole integer using Math.floor()

const randomNum = Math.floor(Math.random()* (3 - (-5) + 1)) + (-5);
console.log(randomNum);

// For my understanding of how Math.random() works I created a random integer between - 5 and 3 exclusively. 

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
