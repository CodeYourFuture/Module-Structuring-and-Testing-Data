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
/* const penceString = "399p"; It initializes a string variable that represents a price in pence, including the "p" at the end.
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); It removes the last character ("p") from penceString
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") It ensures that the number has at least three digits by adding leading zeros if necessary
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) represent pounds (£);
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); It extracts the last two digits to represent pence and ensures it is always two digits
*/