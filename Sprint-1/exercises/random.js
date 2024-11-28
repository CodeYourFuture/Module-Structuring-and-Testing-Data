const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
    (maximum - minimum + 1) = 100
    Math.random() - generates a random floating-point number between (0, 1)
    Math.floor() - rounds down to the nearest whole number
    then + minimum 

    =>

    num is going to be in range [1,100]

*/