const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is generating a random integer number between two values minimum =1 and maximum =100.
// Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1;
// (maximum - minimum + 1) (100 - 1 + 1 =100) in our case, Math.random() * 100 generate a random decimal number between 0 - 99.999;
// The Math.floor() static method always rounds down and returns whole number, in our case 0-99;
// + minimum in our case + 1, increase random range by 1 to make it between 1 - 100;
