const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//ANSWER:

//Math.random() : Gives a decimal between 0 and 1
//Multiply by 100 : Now it's between 0 and 100
//Math.floor() : Turns it into a whole number (0–99)
//Add 1 : Now it's between 1–100 
