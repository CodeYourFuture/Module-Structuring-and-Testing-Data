const penceString = "399p";
// it creates a string representing a price in pence,the p at the end indicates the unit.
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// it removes the trailing "p" from the penceString, leaving only the numeric part of the string.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Insure the numeric string has at least 3 characters, padding it with 0 if needed.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// Takes all digits except the last two to represent the pounds part of the price.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
// Takes the last two digits to represent the pence part of the price, ensuring it has two characters.
console.log(`£${pounds}.${pence}`);
// it logs the final price in pounds and pence format : "£3.99"



// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p".
