const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
Generates a random integer within the inclusive range [minimum, maximum].

How the range is formed:

Math.random() returns a float in the interval [0, 1)

Multiplying by (maximum - minimum + 1) scales it to [0, maximum - minimum + 1)

Math.floor(...) converts that to an integer in [0, maximum - minimum]

Adding minimum shifts the range to [minimum, maximum]

The final result is always an integer between minimum and maximum, inclusive.
*/