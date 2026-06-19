const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//num is a random whole number between the minimum and maximum values.

// Try breaking down the expression and using documentation to explain what it means
// Math.random() generates a random number that's greater than or equal to 0 and less than 1
// Math.floor() rounds a number down to the nearest whole number

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
//I have run it several times and I saw that the number is changing each time.
/*Each time the program runs, Math.random() generates a new random decimal,
so 'num' changes on every run. However, it will never go below the minimum
value (1) or above the maximum value (100). The bounds are 1 and 100.*/
