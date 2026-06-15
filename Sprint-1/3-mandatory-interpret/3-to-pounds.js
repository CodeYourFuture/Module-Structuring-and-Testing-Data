const penceString = "399p";
// prepare a string variable with the value 399p
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// removes the p from the end of the string, leaving 399
// Adds leading zeros if needed to ensure the string has at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// Extracts all digits except the last two to get the pounds value
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// takes the last two digits to represent the pence value and ensures it has two digits
console.log(`£${pounds}.${pence}`);
// shows the final price in pounds and pence format, for example £3.99
// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
