const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//

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
// 1. const penceString = "399p": initialises a string variable with the value "399p".

// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): represent to takes a substring from index 0 up to (but not including) penceString.length - 1.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): assign to ensures the numeric string is at least 3 characters long by adding leading zeros if needed.

// 4. const pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2): Takes the substring from the start up to (but not including) the last two characters.

// 5. substring(length - 2) : use to returns the last two characters (the pence digits). padEnd(2, "0") would append trailing zeros if the result were shorter than 2.

// 6. console.log(`£${pounds}.${pence}`): assign to display the price in a human-readable pounds-and-pence format (£x.yy)
