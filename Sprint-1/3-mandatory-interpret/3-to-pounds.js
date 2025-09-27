const penceString = "399p";
sets the price string with "p" at the end


const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//removes the p from the end


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// makes sure it has at least 3 digits, adds 0 at start if needed


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  // takes last 2 digits → pence, adds 0 at end if needed

console.log(`£${pounds}.${pence}`);
// prints the price in pounds like £3.99


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
