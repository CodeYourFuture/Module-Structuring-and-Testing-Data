const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing




console.log(num)
//num represents a random number that could be between 1 and 100. So everytime we run this code we have different nunbers within that range.
//Math.floor is a Javascript function that  rounds down the decimal number into a full number.
//Math random is a Javascript function that generates a random decimal number between 0 and 1.
//Min and Max are numbers defined with const so when we run the code + 1 + min it makes sure that the outcome should range between 1 and 100. However, if min is removed
//then we might get a 0 result which will not match what we want from the beginning of our code.
//Every time we run the code we see different results that are no lower than 1 and no more than 100.