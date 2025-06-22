/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * The expression `Math.floor(Math.random() * (maximum - minimum + 1)) + minimum` works as follows:
 * 1. `Math.random()` generates a floating-point number in the range [0, 1).
 * 2. Multiplying by `(maximum - minimum + 1)` scales this to the range [0, maximum - minimum + 1).
 * 3. `Math.floor()` rounds the result down to the nearest integer, giving a value in [0, maximum - minimum].
 * 4. Adding `minimum` shifts the range to [minimum, maximum].
 *
 * As a result, `num` will be a random integer between `minimum` and `maximum`, inclusive.
 */
const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);
