const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


console.log(num); // the output of the code in the terminal is 92.

// The num reprsents the variable that stores the result of the equation output.

// The variables maximum and minimum are both declared by the use of 'const'. These are constant throughout the code and connot be changed.
//https://javascript.info/variables
/*Math.floor(Math.random) is an operation that is used in javascript to round numbers. e.g 3.1 becomes 3
https://javascript.info/number
Math.random() gives decimal between 0, 1
The results are multiplied by maximum - minimum + 1 this will give values that range between 0 and 99.999
Math.floor rounds the result to a whole number between 0 to 99
+ minimum shifts to the number between 1 -100
The output of num will be random integer between 1 to 100
/* 

/*I have ran the code several times using the terminal and I got 92 each time,
 possibly because I have used the const to identify the variables, so when I re-run the code
  I get the same result. I had to reset the terminal and
 run the code again and I eventually got different 
result like 52, 50. */


