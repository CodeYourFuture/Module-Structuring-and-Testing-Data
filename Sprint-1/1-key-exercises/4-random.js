const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
The num is a variable that hold a random variable every time we run the code it gives us a different random number.
In the above expression, firstly it will solve the parenthesis part i.e maximum - minimum +1.
i.e, (100 - 1 +1)-> 100 then it will evaluate Math.random, Math.random generate any number from 0-1 and it will multiply by 
100 and added by minimum value i.e 1. Math.floor makes the value round if it is in decimal.
*/