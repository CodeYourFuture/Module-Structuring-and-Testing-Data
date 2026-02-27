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
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// line 3: calling substring method to remove the 'p' letter and keep only digits in the string
// line 8: using padstart method to make the minimum length of the string to 3 characters by adding one zero or two to the left.
// line 9: using substring method to take only the integer part
// line 14: using substring method to take only the decimal part and padend method to make the minimum length of pence to 2 characters by adding zero to the right
// line 18: calling console function to print the integer part that represents the pound and the decimal part that represents the pence seprated by point
