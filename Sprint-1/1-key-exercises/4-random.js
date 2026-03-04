const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//We start with 2 constant (unchangeable) values
//We use them to generate a random number between 1 and 100 with Math.random()
//The random number will always be an integer because Math.floor() is used to round
//down the result.
//At the end the value "minimum" is added to guarantee that the generated "num" is at least 1
//"num" is a random number generator with results between 1 and 100, including 1 but excluding 100 
