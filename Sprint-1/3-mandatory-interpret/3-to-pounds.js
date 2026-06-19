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

// Answers
// 1) variable const penceStringWithoutTrailingP stores the value of only the pennies part without the p. 
// This is done first with penceString.length -1 removes the last index of pence string (p). 
// Then penceString.substring(0) returns the characters from 0 to 2 of the indexes(399) 

// 2) paddedPenceNumberString adds 0 at the beginning until the string is 3 characters long to penceStringWithoutTrailingP variable

// 3) pounds stores 3 by first paddedPenceNumberString.length - 2 removing index 1 and 2. Then paddedPenceNumberString.substring(0) returning index 0.

// 4) pence store the pennies first .length starting from index 1 then padEnd adding 0 to characters that less than 2 counts.

// 5) console.log prints out the final result adding a £ sign at the beginning and a . between pounds and pence.