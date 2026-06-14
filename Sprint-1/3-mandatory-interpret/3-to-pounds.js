//initialises a string variable with the value "399p"
const penceString = "399p";

//Removes the last character "p" from "399p", leaving just "399".
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

//Ensures the pence value has at least 3 digits by adding leading zeros if needed.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Takes all but the last two digits as the pounds part
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//Takes the last two digits as the pence part and keeps it at 2 digits
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//Prints the final price in pounds format
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
