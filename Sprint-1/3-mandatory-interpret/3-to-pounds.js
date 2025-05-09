const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString);
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
// 3.const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// ); removing last character "p" from string
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") Making sure our variable paddedPenceNumberString has at least 3 digits.
// 9.const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// ); Removing last 2 characters, and getting our pounds value
// 14.const pence = paddedPenceNumberString
// .substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0"); Leaving last 2 digits and ensure there are always 2 digits if not adding 0
// 18.console.log(`£${pounds}.${pence}`); Print message to the console in £pounds.pence format
