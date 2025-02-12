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
//const penceString = "399p";

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
//line 3-const penceStringWithoutTrailingP = penceString.substring(
 // 0,
 // penceString.length - 1
//);  Removes the "p" at the end of penceString, leaving only the numeric value
//line8- const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Purpose: Ensures the pence value has at least 3 digits
//line 9-const pounds = paddedPenceNumberString.substring(
 // 0,
 // paddedPenceNumberString.length - 2
//); Extracts the pounds part from the padded string.
//line14-const pence = paddedPenceNumberString
  //.substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0"); : Extracts the last two digits as the pence value and ensures it's always 2 digits.
//line 18-console.log(`£${pounds}.${pence}`);  Constructs and prints the final formatted price in pounds and pence.