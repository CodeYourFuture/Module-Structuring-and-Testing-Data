const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

/// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
//num stores a random whole number in the range from the minimum value (1) to the maximum value (100), including both ends.
// Try breaking down the expression and using documentation to explain what it means?
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
//const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;  
//This line generates a random integer between minimum and maximum, inclusive. Here's a breakdown:
//Math.random() returns a decimal between 0 (inclusive) and 1 (exclusive).
//→ MDN: Math.random()

//(maximum - minimum + 1) defines the size of the range, including the maximum.

//Multiplying the two scales the random number to a desired range.

//Math.floor(...) rounds down to ensure a whole number.
//→ MDN: Math.floor()

//+ minimum shifts the range so it starts at the minimum value.

// Result: num is a random integer from minimum to maximum, inclusive.

//Example: If minimum = 1 and maximum = 100, num will be a random whole number between 1 and 100.
//I added console.log(num) and ran the program multiple times. I observed that num always gives a different whole number between 1 and 100. This helped me understand that the expression creates a random integer by multiplying a random decimal by the range size, rounding down, and then shifting it by the minimum value.