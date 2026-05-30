// initialises a string variable with the value "399p"
const penceString = "399p";

// This cuts the string so we're only saving everything before the p
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// This adds zeros to the start of the string if the string's length is less than 3
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// this only saves the string minus the two letters at the end.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// this extracts the last two characters and adds zeroes to the end
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// prints the result
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
