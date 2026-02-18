const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Maths operations are solved using the PEMDAS order: parentheses, exponents, multiplication & division and addition & subtraction. Javascript does the same
// The program starts by executing Math.random(), which is a method that returns a float number (decimal, not integer) that is greater or equal to 0 and smaller than 1. This number is random and will always be different, but for my explanation I will use 0.123456
// Next the program executes the other parenthesis, by first adding 1 to minimum and then subtracting the result from maximum. In this case it would be -1 + 1 = 0 and then 100 - 0 = 100
// The program will then move on to multiply 0.123456 x 100 = 12.3456
// The next step is Math.floor(), which is a method that rounds a number down to it's closest integer. In our case 12.3456 becomes 12
// Lastly the program executes the last addition, Math.floor() + minimum, and assigns the result to num: num = 12 + 1 = 13
// The value of num is therefore a random number between 1 and 100
// Additional note:
// Adding minimum at the end is necessary to avoid the final result being 0, which could happen if, our Math.random() result was something like 0.000123
// 0.000123 x 100 =  0.0123, which would then be round down by Math.floor() to 0
