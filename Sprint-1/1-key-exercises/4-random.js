const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(`The random number is ${num}`);
// The variable num represents a random integer between the values of minimum (1) and maximum (100), inclusive.
// The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// The expression (maximum - minimum + 1) calculates the range of possible values (100 - 1 + 1 = 100).
// Multiplying Math.random() by this range scales the random number to the desired range.
// Adding minimum shifts the range to start at the minimum value (1).
// Finally, Math.floor() rounds down the result to the nearest whole number, ensuring that num is an integer.
// Therefore, num will always be a whole number between 1 and 100, inclusive.
// This means that every time the program is run, it will produce a different random number within this range.
// The program logs the value of num to the console, showing the generated random number each time it is executed.
// This is useful for scenarios where you need a random number, such as in games, simulations, or testing.
// The use of Math.random(), Math.floor(), and the arithmetic operations ensures that the random number is uniformly distributed across the specified range.
// The program can be run multiple times to see different random numbers generated each time, demonstrating the randomness of the output.
