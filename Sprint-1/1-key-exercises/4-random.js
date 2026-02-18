const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// Math.random() generates random  number . up to 0 but not include 1 
// this (maximum - minimum + 1) gives the range of generated random number 
// and this function Math.floor() make the number to the nearest integer number. 
// num is a random integer between minimum (1) and maximum (100), including 1 & 100

console.log(num); 