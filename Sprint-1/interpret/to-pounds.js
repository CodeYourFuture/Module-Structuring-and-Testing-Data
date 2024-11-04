const penceString = "399p";
// a price in pence 

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// remove "p" from the string

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// make sure the string has at least 3 digits by adding 0 at the front if needed
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//extracts the pounds part

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2);
  // extracts the last 2 digits to get pence part
  // adding 0 if needed

console.log(`£${pounds}.${pence}`);
// display the price by combining pound + pence parts

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
