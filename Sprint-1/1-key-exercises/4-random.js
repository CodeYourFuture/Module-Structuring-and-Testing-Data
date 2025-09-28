const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
    //num represents a variable with the a random number as its value

// Try breaking down the expression and using documentation to explain what it means
    //Math.random() returns a pseudo random number that's >=0 and <1
    //Math.floor() rounds down to the nearest integer
    
// It will help to think about the order in which expressions are evaluated
   //this first (maximum-minimum+1) then this Math.random()* then this Math.floor() then this +minimum

// Try logging the value of num and running the program several times to build an idea of what the program is doing
   //it returns a pseudo random number that's >=0 and <1


console.log(num);
