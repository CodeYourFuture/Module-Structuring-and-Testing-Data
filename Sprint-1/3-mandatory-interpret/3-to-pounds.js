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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
// Removes the "p" from the end of the string, leaving only the number (e.g. "399").

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// Ensures the number has at least 3 digits by adding leading zeros if necessary.
// For example, "5" becomes "005".

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// Takes all but the last two digits to get the pounds part.

// 5. const pence = paddedPenceNumberString
// .substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0"):
// Takes the last two digits as the pence part and makes sure it has two digits.

// 6. console.log(`£${pounds}.${pence}`):
// Prints the final price in pounds and pence, for example "£3.99".
