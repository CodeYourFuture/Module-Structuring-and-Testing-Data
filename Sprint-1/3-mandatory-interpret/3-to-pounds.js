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
// 2.const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1) : remove the P
// 3.paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") :
//  this string method confirm the paddedPenceNumberString at least 3 characters long and (0) values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length.
// 4.const pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2) : take the first digit (3) for pounds value
// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
// take the last two digit (99) for pence value
