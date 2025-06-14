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
In line 3 the function is subtracting the last string character from the string so its now 399 not 399p
In line 8 the .padStart is making sure that there is always 3 digits 
In line 9 they are subtracting the last two characters of the string so its not 399 anymore, only 3
In line 14 substring is making sure there is always 2 characters and pad.End reinforcing that there only is two 
characters
console.log is now showing the final results of how much pounds and pence there is.

