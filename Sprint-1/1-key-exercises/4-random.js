const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// THE EXPLANATION:

// num represents a random whole number (integer) between 1 and 100, inclusive.

// By using this specific formula, we can generate a random number between any two limits just by changing the minimum and maximum values.

// when i added console.log(num); at the bottom of our script and run it multiple times,
// i notice i get a different whole number every time, but it will never drop below 1 and never go above 100.

// to be more specific,
// maximum - minimum + 1: This calculates the size of the range. Plugging in the numbers ($100 - 1 + 1$), it evaluates to 100.
// This ensures there are 100 possible outcomes.Math.random():
// This built-in JavaScript function generates a random decimal number starting from 0 (inclusive) up to, but not including, 1 (exclusive).
// For example, it could be 0.0, 0.523, or 0.999.Math.random() * 100: Multiplying the random decimal by 100 shifts the decimal point, scaling the range.
// This results in a random decimal number between 0 and 99.999....
// Math.floor(...): This function takes the decimal and rounds it down to the nearest whole number.
// This strips away the decimals, leaving us with a random whole number from 0 to 99.+ minimum:
// Finally, adding the minimum value (1) shifts the entire range upward. Instead of 0 to 99, the possible results become 1 to 100.
// Running the program (What happens when you log it): when i added console.log(num);Observation: Each time the code runs, the console outputs a single integer.
// For example, Run 1 might output 42, Run 2 might output 7, and Run 3 might output 100.
// The numbers change unpredictably because of Math.random(), but they will never be lower than 1 or higher than 100.
