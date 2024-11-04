const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num represents a random integer that can be any whole number from 1 to 100,

Math.random():answer 
 If Math.random() returns 0.5, it means it generated a number halfway between 0 and 1.


 Math.random() * (maximum - minimum + 1)

The expression (maximum - minimum + 1) calculates the range of possible values. Here, it evaluates to 100 - 1 + 1 = 100.
Multiplying Math.random() by 100 scales the random value to the range of 0 to 100. This gives a floating-point number from 0 (inclusive) to 100 (exclusive).
Math.floor()

E Math.floor(99.9) returns 99, and Math.floor(0.5) returns 0.
Math.floor(Math.random() * 100) produces an integer between 0 and 99
 Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

The result from Math.floor() is then adjusted by adding minimum. In this case, adding 1.
This shifts the range from 0-99 to 1-100.
Result: By adding minimum, if Math.floor(Math.random() * 100) produces 99, the final value of num would be 99 + 1 = 100.