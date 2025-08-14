const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);
/*
 * Explanation of 'num':
 * The 'num' variable represents a random whole integer generated within the range defined by 'minimum' and 'maximum', inclusive.
 *
 * A step-by-step walkthrough of the expression:
 *
 * 1. (maximum - minimum + 1):
 * - Calculates the size of the desired range. For minimum=1, maximum=100, this is (100 - 1 + 1) = 100.
 * - The '+ 1' is crucial to make the range inclusive of both the minimum and maximum values.
 *
 * 2. Math.random():
 * - Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
 * - E.g., 0.000... to 0.999...
 *
 * 3. Math.random() * (maximum - minimum + 1):
 * - Scales the random number to fit the desired range.
 * - E.g., if Math.random() is 0.75, then 0.75 * 100 = 75.
 * - This results in a floating-point number between 0 (inclusive) and the range size (exclusive).
 *
 * 4. Math.floor(...):
 * - Rounds the result down to the nearest whole integer.
 * - E.g., Math.floor(75.99) = 75.
 * - This ensures we get an integer, effectively mapping the 0 to (range-1) values.
 *
 * 5. ... + minimum:
 * - Shifts the integer to the desired starting point.
 * - E.g., if the result so far is 75, adding 'minimum' (1) gives 75 + 1 = 76.
 * - This transforms the 0 to (range-1) integer into a 'minimum' to 'maximum' integer.
 *
 * In summary, 'num' will be a random integer chosen uniformly from the set {1, 2, 3, ..., 99, 100}.
 */



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


