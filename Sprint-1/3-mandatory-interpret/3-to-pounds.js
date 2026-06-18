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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
// removes the last character ("p") from the string, leaving only the number part "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// makes sure the pence value has at least 3 characters by adding zeros at the start if needed.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// takes the first part of the string to get the pounds value.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
// takes the last two characters to get the pence value and adds a zero at the end if needed.

// 6. console.log(`£${pounds}.${pence}`):
// prints the final price in pounds and pence format.
