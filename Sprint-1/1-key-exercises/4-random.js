const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answers
// num is a constant variable that stores a random integer between the minimum and maximum values (inclusive), generated using Math.random() and Math.floor()



// Math.random()
// This expression gives you a random decimal number between 0 and 1.
// It could be something like 0.25 or 0.879, but it will never reach 1.

// (maximum - minimum + 1)
// This expression calculates how many numbers are in the range you want.
// For example, if your range is 1 to 100, the result is 100 because there are 100 possible values.

// Math.random() * (maximum - minimum + 1)
// This expression multiplies the random decimal by your range.


// Math.floor(...)
// This expression rounds the number down to the nearest integer.
// For example, 37.6 becomes 37, and 99.9 becomes 99.

// + minimum
// Variable minimum is added to the expression "Math.floor(Math.random() * (maximum - minimum + 1))" and the the value is stored inside the variable num