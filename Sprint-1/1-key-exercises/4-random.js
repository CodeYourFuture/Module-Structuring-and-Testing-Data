const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// Answers:

//  num is a variable that stores a random integer between 1 and 100, inclusive.
//	•	Math.floor() rounds a number down to the nearest integer.
//	•	Math.random() generates a decimal number between 0 (inclusive) and 1 (exclusive).
//	•	(maximum - minimum + 1) calculates the size of the range of possible numbers. Here, it is 100 - 1 + 1 = 100.
//	•	minimum is added at the end to shift the result so that it falls within the desired range starting from the minimum value.

// How the formula works:
//	1.	Calculate the size of the range using (maximum - minimum + 1). In this example, with maximum = 100 and minimum = 1, the range size is 100 - 1 + 1 = 100.
//	2.	Math.random() generates a decimal number between 0 (inclusive) and 1 (exclusive), such as 0.0001 or 0.9999.
//	3.	Multiply the result of Math.random() by the range size to scale the number. For example: 0.9999 * 100 = 99.99.
//	4.	Use Math.floor() to round the scaled number down to the nearest whole number. For example: Math.floor(99.99) = 99.
//	5.	Add the minimum value to shift the number into the correct range. For example: 99 + 1 = 100.

//  This ensures that num will always be an integer between 1 and 100, inclusive.
