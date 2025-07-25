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

// 2. const penceStringWithoutTrailingP = penceString.substring( 
// 0, penceString.length - 1): removes the trailing 'p' from the string.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
// : pads the string with leading zeros to ensure it has at least 3 characters.

// 4. const pounds = paddedPenceNumberString.substring
// (0, paddedPenceNumberString.length - 2): extracts the pounds part of the string
//  by taking all characters except the last two because it represents the pence.

// 5. const pence = paddedPenceNumberString.substring
// (paddedPenceNumberString.length - 2).padEnd(2, "0"): 
// extracts the pence part of the string by taking the last two characters 
// and ensuring it has exactly 2 characters by padding with zeros if necessary.

// 6. console.log(`£${pounds}.${pence}`): prints the final formatted string 
// in pounds and pence e.g. £3.99.
