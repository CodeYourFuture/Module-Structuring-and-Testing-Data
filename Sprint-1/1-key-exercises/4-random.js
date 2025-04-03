const minimum = 1;
const maximum = 100;

for ( let i = 0; i < 1000; i++){
    const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(num);
}
// Math module used  to generate random integer in range from 1 to 100, and assign it to variable "num"
// function ".random()" gives random float number fron 0 to 1
// after this value multiplayed onto "(maximum - minimum + 1)" wich with give constants is equal to 100
// function ".floor()" returns the largest integer less than or equal to a result of previous multiplication.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
