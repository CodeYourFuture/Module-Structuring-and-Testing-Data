const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

for (let i = 0; i < 10; i++) {
	console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
}

// In this exercise, you will need to work out what num represents?

// Try breaking down the expression and using documentation to explain what it means
/** These set the range between 1 to 100
 * const minimum = 1;
 * const maximum = 100;
 *
 * The expression inside Math.random() (maxim - minimum + 1) calculates the range like: 100 - 1 + 1 = 100
 * And the function Math.random() returns a random decimal number between 0 (inclusive) and 1 (exclusive) but never exactly 1
 * The multiplication inside the inner parenthesis Math.random() * (maximum - minimum + 1) computes the ranges between 0 (inclusive) and 100 (exclusive)
 *
 * The function Math.floor() rounds down to the nearest integer like:
 * 14.9 -> 14 
 * 88.3 -> 88
 *
 * Adding the minimum the Math.floor(...) + minimum changes the range from (0, 99) to (1, 100)
 *
 * Actually the order of calculation is the following:
 * 1. (maximum - minimu + 1)
 * 2. Math.random() is called
 * 3. Then the multiplication occurs 
 * 4. The function Math.floor() is applied
 * 5. And the minimum is added at end
 *
 * Each time the program is run it'll produce a different number between 1 and 100.
 */
 
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
