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
// removes the trailing "p" from the string, leaving only the numeric part ("399")
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// ensures that the numeric string has at least three characters by adding leading zeros if necessary
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// extracts all the digits except the last two, representing the number of pounds
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
// extracts the last two digits representing the pence
// 6. console.log(`£${pounds}.${pence}`):
// yields the final price in pounds and pence using the format £pounds.pence
