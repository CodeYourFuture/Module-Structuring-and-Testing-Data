const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


   // ANSWER

 // num => represents to a new variable name we declared .
 // In line #1 we are creating a const variable named minimum and assigning a value to it which is 1.
 //In line #2 we are creating a const variable named maximum and assigning a value to it which is 100.
 //Math.random() gives a random number between 1 and 100.
 //Multiply it by (maximum-minimum + 1) ,
 //Math.floor rounds down to a whole number.
 // Add minimum to shift the range to start from minimum.