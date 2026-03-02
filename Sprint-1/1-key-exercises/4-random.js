const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/**
 * Answear:
 *
 * 1. The constants
 *
 * const minimum = 1;
 * const maximum = 100;
 * These are the lowest and highest possible values for the random number we are generating.
 *
 * 2. The expression inside Math.random()
 *
 * Math.random()
 *
 * This returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 * So it could be 0.1234, 0.9876, etc., but never exactly 1.
 *
 * 3. Inside Math.floor()
 *
 * Math.random() * (maximum - minimum + 1) + minimum
 *
 * First, we compute:
 *
 * (maximum - minimum + 1)
 *
 * With minimum = 1, maximum = 100, this is:
 * 100 - 1 + 1 = 100
 * So it’s 100. This is the total number of possible integers from 1 to 100 inclusive.
 * So the expression becomes:
 *
 * 4. The range of values
 *
 * Let’s check possible values step by step:
 *
 * Case 1: smallest possible random = 0
 * 0 * 100 + 1 = 1
 *
 * Case 2: largest possible random = 0.999… (less than 1)
 * 0.999… * 100 = 99.999…
 * 99.999… + 1 = 100.999…
 *
 * But Math.floor() will round down to the nearest integer.
 *
 * 5. Applying Math.floor()
 *
 * If we get a result of 100.999… after multiplication and addition, Math.floor(100.999…) gives 100.
 * If we get a result of 1.0 (or just over 1 up to 1.999…), Math.floor() gives 1.
 * So the possible final num values after Math.floor() are 1, 2, 3, …, 100.
 *
 * 6. Conclusion
 * The code generates a random integer between minimum (1) and maximum (100), inclusive of both.
 * So num represents:
 * A random whole number from 1 to 100.
 */

