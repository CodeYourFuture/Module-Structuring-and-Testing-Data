const penceString = "1399p"; // stores the price in pence as a string with a trailing 'p'

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);  // removes the trailing 'p' from the string to isolate the numeric part

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);  // extracts the pounds part by taking all but the last two characters

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)  // extracts the last two characters as the pence part
  .padEnd(2, "0");  // ensures the pence part is two digits by padding with '0' if necessary

console.log(`£${pounds}.${pence}`);  // outputs the formatted price in pounds and pence

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
