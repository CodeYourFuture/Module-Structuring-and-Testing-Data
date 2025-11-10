const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/**
 * Step 1: Math.random()

 * This generates a random decimal number between 0 (inclusive) and 1 (exclusive).
 * Example: 0.3728, 0.9134, etc.

 * Step 2: (maximum - minimum + 1)

 * This calculates the range of possible numbers you want.
 * Here: 100 - 1 + 1 = 100
 * So, we’re creating a range that includes both 1 and 100.

 * Step 3: Math.random() * (maximum - minimum + 1)

 * This augment the random decimal to fit the range.
 * Example: If Math.random() it returns 0.3728,
 * 0.3728 * 100 = 37.28

 * Step 4: Math.floor(...)

 * Math.floor() rounds down to the nearest whole number.
 * So 37.28 becomes 37.

 * Step 5: + minimum

 * Because the range started from 0, we add minimum (which is 1) to adjust to the correct range.

 * Example: 37 + 1 = 38.

 * So what does num represent?
 * num is a random integer between 1 (inclusive) and 100 (exclusive).
 * Every time the program runs, we get a different number in that range.

*/

