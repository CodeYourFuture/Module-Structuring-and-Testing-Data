const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// Explaning the solution: console.log(num); returns a number.
// Upon investigation Math.Floor - returns and whole int that is the less than or equal to its numeric argument. 
// Math.randon - returns a random float/int
// Now putting my understanding together - I understand that the const num when logged using console.log returns a value in this order 
// A number at random is chosen and is multiplied with the maximum value (of that number) - the minimum value is then added to one (+ 1) and then added to the minimum of the total. 