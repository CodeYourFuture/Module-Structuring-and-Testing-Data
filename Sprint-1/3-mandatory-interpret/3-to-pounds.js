const penceString = "399p";

// remove last character
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// pad to the length of three
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// remove the last two characters
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// get last two characters and pad to two if needed
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

// penceStringWithoutTrailingP: remove last character
// paddedPenceNumberString: pad to the length of three
// pounds: remove the last two characters of paddedPenceNumberString
// pence: get last two characters and pad to two if needed
// log to the console in the format £[pounds].[pence]
