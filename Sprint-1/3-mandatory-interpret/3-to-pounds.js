const penceString = "399p";
 //initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Creates a new string that removes the last character (p) from penceString. 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Ensure the string has at least three digits by adding "0" to the start if needed.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//Extracts the pounds part by taking all characters except the last two digits.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//extract the last two digits to get the pence part.
console.log(`£${pounds}.${pence}`);
// Combines the pound and pence values into a formatted string.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
