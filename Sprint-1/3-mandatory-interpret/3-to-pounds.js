const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//Removes the trailing "p" from the string to isolate the numeric part.


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Ensures the numeric string is at least 3 characters long by padding it with leading zeroes if necessary.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//Extracts the pounds part from the padded string.Takes all but the last two digits to represent whole pounds.
//"399" → "3"
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  // Extracts the last two digits to represent the pence (fractional part).
  // "399" → "99"

console.log(`£${pounds}.${pence}`);
// Formats and prints the final price in pounds and pence with a currency symbol.
// For "399p", output is: £3.99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//Removes the trailing "p" from the string to isolate the numeric part.

