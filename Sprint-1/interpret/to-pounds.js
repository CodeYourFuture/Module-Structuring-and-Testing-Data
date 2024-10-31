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
// 2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); **Purpose: Removes the trailing "p" from the string to isolate the numeric value.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); **Pads the string with leading zeros to ensure it has a minimum length of 3 characters.
// 4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); **Extracts the pound value from the padded string.
// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); **Extracts the last two characters to represent pence and ensures it has exactly 2 characters.
// 6.console.log(£${pounds}.${pence}); **Outputs the formatted price in pounds and pence to the console.
