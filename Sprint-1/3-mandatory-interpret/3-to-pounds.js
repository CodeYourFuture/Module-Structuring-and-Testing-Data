const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// It then removes the trailing "p" character, pads the number with leading
// zeros to ensure it has at least 3 digits, and then separates the pounds and pence parts of the number.

// The program then builds up a string representing the price in pounds
// and pence format (e.g., "£3.99") by concatenating the pounds and pence parts together with a "£" symbol and a decimal point. The final output is printed to the console.

// This program takes a string representing a price in pence (e.g., "399p") and converts it into a formatted string representing the price in pounds and pence (e.g., "£3.99"). 
// by concatenating the pounds and pence parts together with a "£" symbol and a decimal point. The final output is printed to the console.

// You need to do a step-by-step breakdown of each line in this program
// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 1. penceString.substring(0, penceString.length - 1) - line 3
// 2. penceStringWithoutTrailingP.padStart(3, "0") - line 5
// 3. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) - line 6
// 4. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) - line 9
// 5. .padEnd(2, "0") - line 9
// 6. console.log(`£${pounds}.${pence}`)' - line 11

// Try and describe the purpose / rationale behind each step
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// c) Identify all the lines that are variable reassignment statements
// d) Identify all the lines that are variable declarations
// e) Describe what the expression penceString.substring(0, penceString.length - 1) is doing - what is the purpose of this expression?

// To begin, we can start with
// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 1. penceString.substring(0, penceString.length - 1) - line 3
// 1. const penceString = "399p": initialises a string variable with the val
// ue "399p".
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): creates a new string variable by taking a substring of `penceString` that excludes the last character (the "p"). This effectively removes the trailing "p" from the original string, leaving just the numeric part (e.g., "399").
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): pads the `penceStringWithoutTrailingP` with leading zeros to ensure it has at least 3 characters. If `penceStringWithoutTrailingP` is shorter than 3 characters, it will add zeros at the start until it reaches a length of 3 (e.g., "399" remains "399", but "99" would become "099").
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length -
