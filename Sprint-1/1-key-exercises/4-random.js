const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing



//Math.random() returns a random number/ decimal number between 0 (inclusive),  and 1 (exclusive).

//Math.random() always returns a number lower than 1.

// * (maximum - minimum + 1) multiplying by this is to give a range of possible values.

// adding the minimum at the end is to give a range value between the minimum and maximum inclusive.

// Math.floor usually rounds the number down  to the nearest integer. 

console.log (num); // first print is 24
console.log (num); // second print 3
console.log (num); // third print is 17
console.log (num); // fourth print is 70
console.log (num); // fifth print is 7