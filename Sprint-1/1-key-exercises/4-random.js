const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// Answers:

// num is a variable that returns a random number between 1 and 100, inclusive. 

// - Math.floor(); rounds down a number to its nearest integer. 
// - Math.random(); it returns an unexpected value within the specified range. Usually it is between 0 and 1, but excluding 1. 
// - (maximum - minimum + 1); This formula represents the range. Maximum means the maximum number minus the minimum number + 1. 
// - minimum; this is the minimum number added to the formula to generate a number within the range. 

// The formula works as follows:

//	•We use the formula (maximum - minimum + 1) to calculate the size of the desired range.
//    In the example above, maximum = 100 and minimum = 1.
//    So: 100 - 1 = 99, then 99 + 1 = 100.
//	•Math.random() generates a decimal number between 0 (inclusive) and 1 (exclusive).
//    For example: 0.0001, 0.5342, 0.9999.
// 	•We multiply the result of Math.random() by (maximum - minimum + 1) to scale it to the desired range.
//    Example: 0.9999 * 100 = 99.99.
// 	•We then use Math.floor() to round the result down to the nearest whole number.
//    Example: Math.floor(99.99) = 99.
// 	•Finally, we add the minimum value to shift the result into the correct range.
//    Example: 99 + 1 = 100.
