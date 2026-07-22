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
// 1. const penceString = "399p": initialize a string variable with the value "399p"
// 2. penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing "p".
// 3. paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): pads the number with leading zeros to ensure it has at least 3 digits.
// 4. pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Determines that the 'pound' is the first part of the string.
// 5. pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Determines that the 'pence' is the last two digits of the string.
// 6. console.log(`£${pounds}.${pence}`): Outputs the final formatted string representing the price in pounds and pence.
