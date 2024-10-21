const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
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
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): removes "p" in the penceString variable // "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Ensures that penceStringWithoutTrailingP has a least 3 characters.
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): removes "99" in the paddedPenceNumberString // 3
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Ensure that pence has at least 2 characters
// 6. console.log(`£${pounds}.${pence}`): formats the price in pounds and prints it out