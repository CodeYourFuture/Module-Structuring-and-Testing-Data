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
  .substring(paddedPenceNumberString.length - 2);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 3. const penceStringWithoutTrailingP declared with assigned value 
// - substring of penceString that's starts from the beginning of penceString -->
// --> but ends without last character

// 8. const paddedPenceNumberString declared and assigned value - 
// If string penceStringWithoutTrailingP shorter than 3 characters,  it add 0 to the start.

// 14. const pence declared and assigned value = 
// substring from variable paddedPenceNumberString ( last two characters)
// function padEnd is not needed, because string parsed in line 2 always has length 2 -->
// --> because padStart() where used in line 8
