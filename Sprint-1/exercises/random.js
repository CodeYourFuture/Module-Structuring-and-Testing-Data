const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random(): This method generates a random floating-point number between 0 and 1 but it will never actually be 1.
// so it could be 0.12334 , 0.99989 but not 1.
// (maximum - minimum +1) which is equal to 100 and multiplying Math.random() with 100 generate a number between 0 and 100 but not 100 it self.
// Math.floor(): rounds a number down to the nearest integer. so if the result of (Math.random() * (maximum - minimum + 1)) become 38.3, Math.floor() will turn it to 38.
// + minimum: adding minimum which is 1 in this case to the result shifts the range from 0-99 to 1-100.

console.log(num);
