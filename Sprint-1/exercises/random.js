const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
// Math.floor() Returns the largest integer less than or equal to the input.
// Math.random() Returns a pseudo-random number between 0 and 1.
// The order is priority as in math, so first is evaluated the value in inner parantheses (100)
//then it's multipled to a random number number, I believe even those with decimal point (real numbers) in between 0 and 1, such as 0.2,0.50,0.58
//then Math floor is coming to round the integer <= of this random number
//finally the random number adds to minimum which is 1 