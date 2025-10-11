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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): takes of the p at the end of the string.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): creates a paddded pencestring value so that if the value has less than 3 digits it gets padded with 0s at the start to make it 3 digits.
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): creates a variable that holds the pound value of the string by removing the last 2 digits of the padded pence string.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): creates a variable that holds the pence value of the string by taking the last 2 digits of the padded pence string and if there is only one digit it pads it with a 0 at the end to make it 2 digits.
// 6. console.log(`£${pounds}.${pence}`): prints out the final value in pounds and pence format.
